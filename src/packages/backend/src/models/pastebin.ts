import mongoose from "mongoose";
import { v4 } from "uuid";

const pastebinSchema: mongoose.Schema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

pastebinSchema.methods.setID = function () {
  this.id = v4();
};

export default mongoose.model("Pastebin", pastebinSchema);
