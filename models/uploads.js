const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uploadSchema = new Schema({
  category: {
    type: [String],
    enum: ["Electronics", "Furniture", "Clothing", "Books", "Plastic", "Metal", "Glass", "Others"],
  },
  type: {
    type: [String],
    enum: ["Reusable", "Recyclable", "Disposable", "NotSure"],
  },
  description: String,
  image: {
    filename: String,
    url: String,
  },
  location: String,
  status: {
    type: String,
    enum: ["pending", "accepted"],
    default: "pending",
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

const Upload = mongoose.model("Upload", uploadSchema);
module.exports = Upload;