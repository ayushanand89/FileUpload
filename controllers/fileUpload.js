const File = require("../models/File");

//localfileupload -> handler function

exports.localFileUpload = async (req, res) => {
  try {
    //fetch file
    const file = req.files.file;
    console.log("file aa gyi: ", file);

    let path = __dirname + "/files/" + Date.now();
    console.log("path: ", path);

    file.mv(path, (err) => {
      console.log(err);
    });

    res.json({
      success: true,
      message: "File uploaded successfully",
    });
  } catch (e) {
    console.log(e);

  }
};
