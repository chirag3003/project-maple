import mongoose from "mongoose";
import crypto from "crypto";

const authSchema: mongoose.Schema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    attributes: {
      color: {
        type: String,
        default: "#F5D76E",
      },
    },
  },
  {
    timestamps: true,
  }
);

authSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

authSchema.methods.validatePassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

export default mongoose.model("User", authSchema);
