import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const pathDefault = "http://localhost:4000/api/images/users/user-default.png";

const productSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    code: {
      type: Number,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pathImage: {
      type: String,
      default: pathDefault,
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

productSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

productSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

export default model("User", productSchema);
