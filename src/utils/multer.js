const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/assets/cover/')
  },
  filename: function (req, file, callback) {
    callback(null, `book-${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024 // 2 MB (max file size)
  },
  fileFilter: function (req, file, callback) {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
      req.fileValidationError = 'Only image files are allowed!'
      return callback(new Error('Only image files are allowed!'), false)
    }
    callback(null, true)
  }
}).single('picture')

module.exports = upload
