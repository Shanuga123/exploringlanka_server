import express from "express";
import multer from "multer";
import Product from "../models/Product.js";

const router = express.Router();

/* Configuration Multer for File Upload */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Store uploaded files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({ storage });

/* CREATE BLOG */
router.post("/create/product", upload.array("listingPhotos"), async (req, res) => {
  try {
    /* Take the information from the form */
    const {
      title,
      description,
      imgUrl,
      streetAddress,
      city,
      province,
      price,
      contactNumber,

    } = req.body;

    const listingPhotos = req.files;

    if (!listingPhotos) {
      return res.status(400).send("No file uploaded.");
    }

    const listingPhotoPaths = listingPhotos.map((file) => file.path);

    const newListing = new Product({
      listingPhotoPaths,
      title,
      description,
      imgUrl,
      streetAddress,
      city,
      province,
      price,
      contactNumber,
    });

    await newListing.save();

    res.status(200).json(newListing);
  } catch (err) {
    res.status(409).json({ message: "Fail to create Listing", error: err.message });
    console.log(err);
  }
});

router.get("/all", async (req, res) => {
    try {
      const blogs = await Product.find();
      res.status(200).json(blogs);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch Products", error: err.message });
    }
  });


  router.get("/:listingId", async (req, res) => {
    try {
      const { listingId } = req.params;
      const listing = await Product.findById(listingId);
      if (!listing) {
        return res.status(404).json({ message: "Product Listing not found!" });
      }
      res.status(202).json(listing);
    } catch (err) {
      res.status(500).json({ message: "Server error!", error: err.message });
    }
  });

  /* UPDATE BLOG */
router.put("/update/:listingId", upload.array("listingPhotos"), async (req, res) => {
  try {
    const { listingId } = req.params;

    /* Take the information from the form */
    const {
      title,
      description,
      categories,
      tags,
      imgUrl,
    } = req.body;

    const listingPhotos = req.files;

    const updatedFields = {
      title,
      description,
      categories,
      tags,
      imgUrl,
    };

    if (listingPhotos) {
      const listingPhotoPaths = listingPhotos.map((file) => file.path);
      updatedFields.listingPhotoPaths = listingPhotoPaths;
    }

    const updatedListing = await Product.findByIdAndUpdate(
      listingId,
      updatedFields,
      { new: true }
    );

    if (!updatedListing) {
      return res.status(404).json({ message: "Product Listing not found!" });
    }

    res.status(200).json(updatedListing);
  } catch (err) {
    res.status(409).json({ message: "Fail to update Listing", error: err.message });
    console.log(err);
  }
});


export default router;
