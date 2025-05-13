//before we working with multer always make public folder (it is the common error that beginner does)
//public folder is where the file gets store

import multer from "multer";
import path from "path";

let limits = {
  filesize: 1024 * 1024 * 5, // 5MB
  //the maximum file size in bytes
  // 1 kilobyte equals to 1024 byte
};

let storage = multer.diskStorage({
  // (./) means root(main) folder
  //note: you must make public folder manually or it will throw error like no such file path or directory
  //destination give the folder location where the file is placed.
  destination: (req, file, cb) => {
    let staticFolder = "./public";
    cb(null, staticFolder);
  },

  // filename give the title(name) of the file.
  filename: (req, file, cb) => {
    let fileName = Date.now() + file.originalname;
    cb(null, fileName);
  },
});

let fileFilter = (req, file, cb) => {
  let validExtensions = [
    ".png",
    ".PNG",
    ".jpg",
    ".JPG",
    ".jpeg",
    ".JPEG",
    ".pdf",
    ".doc",
    ".docx",
  ];

  let originalName = file.originalname;

  //note: path module is inbuilt module of node js
  let originalExtension = path.extname(originalName);

  let isValidExtention = validExtensions.includes(originalExtension);

  if (isValidExtention) {
    //true means pass such type of file
    //note: null represent error
    cb(null, true);
  } else {
    //false means don't pass such type of file
    cb(new Error("File is not supported"), false);
  }
};

const upload = multer({
  //storage define the location in server wehre the file is store and control the fileName.
  storage: storage,

  //filter the file according to the extensions
  fileFilter: fileFilter,

  // filter the file according to its size
  limits: limits,
});

export default upload;
