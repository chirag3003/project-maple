import mongoose from "mongoose";
import { nanoid } from "napi-nanoid";
import { PastebinData } from "../interfaces/pastebin.interface";

const pastebinSchema: mongoose.Schema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        pastebinId: {
            type: String,
            required: true,
            unique: true,
        },
        attributes: {
            isPrivate: {
                type: Boolean,
                default: false,
            },
            password: {
                type: String,
                default: null,
            },
            viewOnce: {
                type: Boolean,
                default: false,
            },
        },
    },
    {
        timestamps: true,
    }
);

pastebinSchema.methods.setID = function (id?: string) {
    this.pastebinId = id ? id : nanoid();
};

export default mongoose.model("Pastebin", pastebinSchema);
