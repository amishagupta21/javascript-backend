import multer from "multer"
const storage = multer.diskStorage({
    destination: function (req, file, cb) {//ye file multer k paas rhta hai 
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
 export  const upload = multer({ storage: storage })