import app from "./app.js";
import db from "./db/dbConfig.js";

// NOTE: UNCAUGHT EXCEPTION
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTIONS: 💥 Shutting down...");
  console.log(err.name, err.message);
  console.log(err);
  process.exit(1);
});

// NOTE: Authenticate Database
db.authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((error: any) =>
    console.log("Unable to connect to the database:", error)
  );

db.sync({ alter: true })
  .then(() => console.log("🟢 Tables created"))
  .catch((err) => console.log("Failed to create table", err));

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server listening on : ${port}`);
});

//NOTE: UNHANDLED REJECTION
process.on("unhandledRejection", (err: any) => {
  console.log("UNHANDLED REJECTION: 💥 Shutting down...");
  console.log(err.name, err.message);
  console.log("❌❌❌❌❌",err);
  server.close(() => {
    process.exit(1);
  });
});
