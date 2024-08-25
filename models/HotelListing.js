import mongoose from "mongoose";

const { Schema, model } = mongoose;

const roomSchema = new Schema({
    title: {
        type: String,
        required: true,
      },
      description:{
        type: String,
        required: true,
      },
      highlight:{
        type: String,
        required: true,
      },
      highlightDesc:{
        type: String,
        required: true,
      },
    
      price: {
        type: Number,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
     
      guestCount: {
        type: Number,
        required: true,
      },
      bedroomCount: {
        type: Number,
        required: true,
      },
      bedCount: {
        type: Number,
        required: true,
      },
      bathroomCount: {
        type: Number,
        required: true,
      },
      amenities: {
        type: Array,
        default: [],
      },
      imageUrl: { // Add imageUrl field
        type: String,
        required: true,
      }, 
});
const CommentSchema = new Schema({
  
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  });

const HotelListingSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      hotelId: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      hoteltitle: {
        type: String,
        required: true,
      },
      hotelDescription: {
        type: String,
        required: true,
      },
      starRating: {
        type: Number,
        required: true,
      },
      placeView: {
        type: String,
        required: true,
      },
      province: {
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
      hotelHighlights: {
        type: Array,
        default: [],
      },
      zipCode: {
        type: String,
        required: true,
      },
      approve: {
        type: Boolean,
        default: false,
      },
      hotelPhotos: {
        type: [String],
        required: true,
      },
  
      listingPhotoPaths: [{ type: String, required: false, }],
  
      rooms: [roomSchema],
      comments: [CommentSchema], // Assuming you have a CommentSchema defined
    },
    { timestamps: true}
);

const HotelListing = model("HotelListing", HotelListingSchema);

export default HotelListing;



