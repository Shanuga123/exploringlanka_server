import express from "express";
import HotelListing from "../models/HotelListing.js";

const router = express.Router();

router.get("/search/:search", async (req, res) => {
    const { search } = req.params
  
    try {
      let listings = []
  
      if (search === "all") {
        listings = await HotelListing.find().populate("creator")
      } else {
        listings = await HotelListing.find({
          $or: [
            { category: {$regex: search, $options: "i" } },
            { title: {$regex: search, $options: "i" } },
          ]
        }).populate("creator")
      }
  
      res.status(200).json(listings)
    } catch (err) {
      res.status(404).json({ message: "Fail to fetch listings", error: err.message })
      console.log(err)
    }
  });

  router.get("/:listingId", async (req, res) => {
    try {
      const { listingId } = req.params;
      const listing = await HotelListing.findById(listingId);
      if (!listing) {
        return res.status(404).json({ message: "Product Listing not found!" });
      }
      res.status(202).json(listing);
    } catch (err) {
      res.status(500).json({ message: "Server error!", error: err.message });
    }
  });

  router.put("/approve/:listingId", async (req, res) => {
    try {
        const { listingId } = req.params;
        const { approve } = req.body;

        const updatedListing = await HotelListing.findByIdAndUpdate(
            listingId,
            { approve },
            { new: true }
        );

        if (!updatedListing) {
            return res.status(404).json({ message: "Activity not found!" });
        }

        res.status(200).json(updatedListing);
    } catch (err) {
        res.status(500).json({ message: "Server error!", error: err.message });
    }
});


  export default router;