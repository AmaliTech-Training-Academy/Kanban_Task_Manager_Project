import { DataTypes } from 'sequelize';
import sequelize from '../db/dbConfig.js';
import bcrypt from 'bcryptjs'

const User = sequelize.define(
  'User',
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
          msg: 'Please provide your photo',
        },
      },
    },

    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin'],
      defaultValue: 'user',
    },

    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please tell us your full name',
        },
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Please Provide a valid email',
        },
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please provide a passwords',
        },
      },
    },

    confirmPassword: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      validate: {
        validatePasswords(value: string) {
          if (!(value === this.password)) {
            throw new Error('Passwords are not the same');
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

    status: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['active', 'inactive'],
      defaultValue: 'active',
    },
    isVerified: { type: DataTypes.BOOLEAN, defaultValue: false },
    verifyCode: DataTypes.STRING,
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
    if (!user.changed('password')) {
      return;
    }
    // STEP: Hash the password with cost of 12
    user.password = await bcrypt.hash(user.password, 12);
  });

  // Model Synchronization
User.sync({alter:true})
  .then(() => console.log('✔ Synchronize user table'))
  .catch(err => console.log('Failed to create table', err));

export default User;
