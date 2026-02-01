const multer  = require('multer')
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
 
    let ext = file.originalname.split('.');
    
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix  + '.' + ext[ext.length - 1])
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only PNG and JPEG is allowed!'), false);
  }
};

const upload = multer({ storage: storage, limits:{fileSize: 1024 * 1024 * 5}, fileFilter: fileFilter });
module.exports = upload;