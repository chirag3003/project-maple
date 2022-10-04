import mongoose from "mongoose";
import crypto from "crypto";
import { nanoid } from "napi-nanoid";

const authSchema: mongoose.Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 6,
      max: 255,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    name: {
      first_name: {
        type: String,
        require: true,
      },
      last_name: {
        type: String,
        require: true,
      },
    },
    phone: {
      type: String,
    },
    address: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zip: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    birthday: {
      type: Date,
    },
    salt: {
      type: String,
    },
    hash: {
      type: String,
    },
    socials: {
      facebook: {
        type: String,
      },
      twitter: {
        type: String,
      },
      instagram: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      github: {
        type: String,
      },
    },
    attributes: {
      passwordResetToken: {
        type: String,
      },
      apiKey: {
        type: String,
        default: nanoid(),
      },
    },
  },
  {
    timestamps: true,
  }
);

authSchema.methods.setPassword = function (password: string) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

authSchema.methods.validatePassword = function (password: string) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

authSchema.methods.generatePasswordReset = function () {
  this.attributes.passwordResetToken = nanoid();
};

authSchema.methods.generateNewAPIKey = function () {
  this.attributes.apiKey = nanoid();
};

export default mongoose.model("User", authSchema);
