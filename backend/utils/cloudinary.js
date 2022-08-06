const cloudinary = require("cloudinary").v2

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_KEY
  });

  module.exports = cloudinary;