import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      unique: [true, "username is already taken"],
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
