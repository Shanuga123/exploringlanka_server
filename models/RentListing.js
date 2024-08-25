import mongoose from "mongoose";

const { Schema, model } = mongoose;

const RentListingSchema = new Schema({
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
      seatCount: {
          type: Number,
          required: true,
      },
      doorCount: {
          type: Number,
          required: true,
      },
      amenities: {
        type: Array,
        default:[]
      },
      features: {
          type: Array,
          default:[]
      },
      
      listingPhotoPaths: [{ type: String, required:false }], // Store photo URLs
      imgUrls: {
        type: [String],
        required: true,
      },
  
      model: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
          type: Number,
          required: true,
      },
      extraCharge: {
          type: Number,
          required: true,
        },
        mileage: {
          type: Number,
          required: true,
        },
        minimumPeriod: {
          type: Number,
          required: true,
        },
  
        maximumPeriod: {
          type: Number,
          required: true,
        },
  
        airConditioning: {
          type: String,
          required: true,
        },
        gearType: {
          type: String,
          required: true,
        },
        driver: {
          type: String,
          required: true,
        },
        contactNumber: {
          type: Number,
          required: true,
        },
        approve: {
          type: Boolean,
          default: false,
        },
    },
    { timestamps: true}
);

const RentListing = model("RentListing", RentListingSchema);

export default RentListing;



