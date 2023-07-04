import app from './app.js';
import db from './db/dbConfig.js';

// Authenticate Database
db.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((error: any) =>
    console.log('Unable to connect to the database:', error)
  );

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on : ${port}`);
});
