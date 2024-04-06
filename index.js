//app creation
const express = require("express");
const app = express();

//finding port
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//adding middleware
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());

//DB connection
const db = require("./config/database");
db.connect();

//connection with cloud
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//mounting api routes
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

//activating server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
