import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads'); // specify the destination directory
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname); // specify the file name
    }
});

const upload = multer({ storage });

export default upload;
