var express = require('express');
var bodyParser = require('body-parser');
const cors = require("cors");

const upload = require("./imageUpload");
const singleUpload = upload.single("image");

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/image", function (req, res) {
  const uid = req.params.id;

  singleUpload(req, res, function (err) {
    if (err) {
      return res.status(413).json({
        success: false,
        errors: {
          title: "Image Upload Error",
          detail: err.message,
          error: err,
        },
      });
    }
    res.sendStatus(200);
  });
});

app.listen(8080, function () {
  console.log('App listening on port 8080');
});
