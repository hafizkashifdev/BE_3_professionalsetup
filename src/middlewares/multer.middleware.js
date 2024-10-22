import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// Convert URL to directory path for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Construct the path relative to the current file's location
        const uploadPath = path.join(__dirname, '..', 'public', 'temp');
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

export const upload = multer({ storage });
