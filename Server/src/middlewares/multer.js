import multer from "multer";
import path from "path";

/* function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
} */

const storageUser = multer.diskStorage({
    destination: path.join(__dirname, "../public/user"),
    filename:  (req, file, cb) => {
        const id = req.userId;
        let ext  = path.extname(file.originalname);
        ext = ext.length > 1 ? ext: '.'+ mime.extension(file.mimetype);
        const fileName = id + '_imgprofile' + ext;
        req.img_filename = fileName;

        cb(null, fileName);
    }
})
const uploadAImage = multer({
    storage: storageUser,
    limits: {fileSize: 10 * 1024 * 1024 * 1024}
}).single('image');
const uploadImages = multer({
    storageUser,
    limits: {fileSize: 10 * 1024 * 1024}
}).array('images');

export { uploadAImage, uploadImages };