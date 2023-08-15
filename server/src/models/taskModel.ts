import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

import User from "./UserModel.js";

const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  assignee: {
    type: DataTypes.VIRTUAL(DataTypes.ARRAY(DataTypes.STRING)),
    allowNull: false,
  },

  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "todo",
    validate: {
      isIn: [["todo", "doing", "done"]],
    },
  },
  
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  dueDate: { type: DataTypes.DATEONLY, allowNull: false },
});

// Model Synchronization
// Task.sync({ alter: true })
//   .then(() => console.log("🟢 Synchronize Task table"))
//   .catch((err) => console.log("Failed to create table", err));

export default Task;
