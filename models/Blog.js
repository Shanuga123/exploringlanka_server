import mongoose from "mongoose";

const { Schema, model } = mongoose;

const BlogsSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
      type: String,
      required: true
  },
  listingPhotoPaths: [{ type: String, required:false }],

  categories: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    default:[],
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

const Blogs = model("Blogs", BlogsSchema);

export default Blogs;
