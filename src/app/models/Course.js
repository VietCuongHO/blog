import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updateddAt: { type: Date, default: Date.now },
});

const model = mongoose.model("Course", Course);

export default model;
