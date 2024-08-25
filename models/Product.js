import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ProductsSchema = new Schema({
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

  imgUrl: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
},
contactNumber: {
  type: Number,
  required: true,
},
});

const Products = model("Products", ProductsSchema);

export default Products;
