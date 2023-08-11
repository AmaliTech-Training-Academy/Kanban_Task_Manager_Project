import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

import User from "../models/UserModel.js";
import Task from "../models/taskModel.js";

const TaskUser = sequelize.define(
  "TaskUser",
  {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: Task,
        key: "id",
      },
    },

    taskId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    timestamps: true,
    updatedAt: false,
    createdAt: false,
  }
);

// NOTE: Associations
User.belongsToMany(Task, {
  foreignKey: "userId",
  through: TaskUser,
});
Task.belongsToMany(User, {
  foreignKey: "taskId",
  through: TaskUser,
  as: "assignees",
});

// TaskUser.sync({ force: true })
//   .then(() => console.log("🟢 Synchronize TaskUser table"))
//   .catch((err) => console.log("Failed to create table", err));

export default TaskUser;
