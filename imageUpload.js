const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
var s3  = new aws.S3({
  // accessKeyId:  ...,
  // secretAccessKey: ... ,
  region: process.env.AWS_REGION,
  endpoint: process.env.AWS_S3_ENDPOINT ,
  s3ForcePathStyle: true, // needed with minio?
  signatureVersion: 'v4'
});

const parseFileExtension = (filename) => {
  return (/[.]/.exec(filename)) ? '.'+/[^.]+$/.exec(filename) : '';
}

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: "public-read",
    s3,
    bucket: process.env.S3_BUCKET,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: "TESTING_METADATA" });
    },
    key: function (req, file, cb) {
      console.log('file ----------------\n', file);
      cb(null, Date.now().toString() + parseFileExtension(file.originalname));
    },
  }),
});

module.exports = upload;

