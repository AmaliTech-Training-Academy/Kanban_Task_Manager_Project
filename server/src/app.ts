// Third party Modules
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

const app = express();

//  GLOBAL MIDDLEWARES
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

app.get('/', (req: Request, res: Response | any, next: any) => {
  res.send('Server started');
});

export default app;
