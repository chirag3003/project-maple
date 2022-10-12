import mongoose from "mongoose";
import { nanoid } from "napi-nanoid";

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
        views:{
            type:Number,
            default:0,
            min:0,
        }
    },
    {
        timestamps: true,
    }
);

pastebinSchema.methods.setID = function (id?: string) {
    this.pastebinId = id ? id : nanoid();
};

export default mongoose.model("Pastebin", pastebinSchema);
