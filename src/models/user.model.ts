import mongoose = require("mongoose");
import { RoleEnum } from "../enums/role.enum";
import { IUser } from "../interfaces/user.interface";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: false },
    avatar: { type: Number, required: false },
    role: {
      type: String,
      enum: RoleEnum,
      required: true,
      default: RoleEnum.USER,
    },
    isVerified: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const User = mongoose.model<IUser>("users", userSchema);
