import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ActivityListingSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      category: {
        type: String,
        required: true,
      },
      type: {
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
      guestCount: {
        type: Number,
        required: true,
      },
      
      amenities: {
        type: Array,
        default:[]
      },
      listingPhotoPaths: [{ type: String, required:false }],
  
    imgUrls: {
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
      contactNumber: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      approve: {
      type: Boolean,
      default: false 
    }
    },
    { timestamps: true}
);

const ActivityListing = model("ActivityListing", ActivityListingSchema);

export default ActivityListing;



