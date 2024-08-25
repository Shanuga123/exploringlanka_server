import mongoose from "mongoose";

const { Schema, model } = mongoose;

const RestaurantListingSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      category: {
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
      amenities: {
        type: Array,
        default:[]
      },
      cuisines: {
          type: Array,
          default:[]
      },
      styDinings: {
          type: Array,
          default:[]
      },
  
      listingMenuPhotoPaths:[{type: String, required: false,}],
  
      imgUrls: {
      type: [String],
      required: true,
    },
    menuImgUrls: {
      type: [String],
      required: true,
    },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      highlight: {
        type: String,
        required: true
      },
      highlightDesc: {
        type: String,
        required: true
      },
      placeView: {
          type: String,
          required: true,
      },
      availabilityPeriod: {
          type: String,
          required: true,
      },
      openingTime: {
          type: String,
          required: true,
      },
      closingTime: {
          type: String,
          required: true,
      },
      approve: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true}
);

const RestaurantListing = model("RestaurantListing", RestaurantListingSchema);

export default RestaurantListing;



