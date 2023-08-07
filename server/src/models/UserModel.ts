import { DataTypes, Model } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcrypt from "bcryptjs";

import Task from "./taskModel.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please provide your photo",
        },
      },
    },

    role: {
      type: DataTypes.ENUM,
      values: ["user", "admin"],
      defaultValue: "user",
    },

    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please tell us your full name",
        },
        len: [3, 50],
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Please Provide a valid email",
        },
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please provide a password",
        },
        len: {
          args: [8, 100], 
          msg: "Password must be between 6 and 100 characters long.",
        },
      },
    },

    confirmPassword: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      validate: {
        validatePasswords(value: string) {
          if (!(value === this.password)) {
            throw new Error("Passwords are not the same");
          }
        },
      },
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    rank: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    token: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    about: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    status: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["active", "inactive"],
      defaultValue: "inactive",
    },
    isVerified: { type: DataTypes.BOOLEAN, defaultValue: false },
    passwordChangedAt: DataTypes.DATE,
    passwordResetToken: DataTypes.STRING,
    passwordResetExpires: DataTypes.DATE,
  },
  {
    timestamps: true,
    updatedAt: false,
  }
);

// Hooks
User.beforeSave(async (user: any) => {
  if (!user.changed("password")) {
    return;
  }
  // STEP: Hash the password with cost of 12
  user.password = await bcrypt.hash(user.password, 12);

  // NOTE: -1000 is ensure the token is always created after the password has been changed
  user.passwordChangedAt = Date.now() - 1000;
});


// Model Synchronization
// User.sync({ alter: true })
//   .then(() => console.log("🟢 Synchronize User table"))
//   .catch((err) => console.log("Failed to create table", err));

export default User;
