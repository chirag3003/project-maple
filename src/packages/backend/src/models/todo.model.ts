import mongoose from "mongoose";

const todoSchema: mongoose.Schema = new mongoose.Schema(
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

todoSchema.methods = {
  view(full) {
    const view = {
      id: this.id,
      content: this.content,
      attributes: {
        color: this.attributes,
      },
      completed: this.completed,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
    return full
      ? {
          ...view,
        }
      : view;
  },
};

export default mongoose.model("Todos", todoSchema);
