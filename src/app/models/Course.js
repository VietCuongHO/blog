import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

const Schema = mongoose.Schema;
mongoose.plugin(slug);

const courseSchema = new Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

const model = mongoose.model("courses", courseSchema);

export default model;
