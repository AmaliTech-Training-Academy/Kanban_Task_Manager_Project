// System Modules
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

// Third party Modules
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

// Developer Modules
import AppError from './utils/appError.js';
import userRouter from './routers/userRoutes.js';
import adminRouter from './routers/adminRoutes.js';
import globalErrorHandler from './controllers/errorController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

//  GLOBAL MIDDLEWARES

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, './public')));

// NOTE: Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  console.log('🚀🚀', process.env.NODE_ENV);
  app.use(morgan('dev'));
}

// Body passer, reading data from body
app.use(express.json({ limit: '10kb' }));
// passes data from cookie
app.use(cookieParser());

//NOTE: Test middleware
// app.use((req, res, next) => {
//   console.log('MIDDLEWARE');
//   console.log('🦄🦄🦄🦄🦄', req.cookies);
//   next();
// });

// Routers
app.get('/', (req: Request, res: Response | any, next: any) => res.send('server started'));

app.use('/auth', userRouter);
app.use('/admin', adminRouter);


// STEP: HANDLING ALL UNDHANDLE ROUTES
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
