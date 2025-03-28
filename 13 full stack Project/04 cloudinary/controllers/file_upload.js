const File = require('../models/file');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const { User } = require('../models/file');

async function log(req, res) {
    const { email, password } = req.body;
    const data = await User.create({ email, password });
    res.send({ msg: data });
}

async function give(req, res) {
    const { id } = req.body;
    const data = await User.findOneAndDelete({ _id: id });
    res.send({ data });
}

async function uploadToCloudinary(file, folder, quality) {
    let options = { folder };

    // automatic find file type
    options.resource_type = 'auto';

    // reduce the quality of image/video
    if (quality)
        options.quality = quality;

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

async function imageUpload(req, res) {
    try {
        // Data fetch
        const { email, tags, size } = req.body;
        if (size > 5242880) {
            return res.status(400).json({ success: false, message: "File size is large than 5 MB" });
        }

        // Check if files exist and handle multiple files
        if (!req.files || !req.files.imageFile) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const file = req.files.imageFile;

        // Validation
        const supportedTypes = ['jpeg', 'png', 'jpg'];
        const fileExtension = file.name.split('.').pop().toLowerCase();

        if (!supportedTypes.includes(fileExtension)) {
            return res.status(400).json({
                success: false,
                message: "Only jpeg, jpg, png files are allowed"
            });
        }

        // Upload to Cloudinary
        const imageUrl = (await uploadToCloudinary(file, "file_up")).secure_url;

        console.log("Cloudinary response:", imageUrl);

        // DB save
        const savedFile = await File.create({
            filename: file.name,
            imageUrl,
            email,
            tags,
            size
        });

        res.status(201).json({
            success: true,
            message: "File uploaded successfully",
            imageUrl: savedFile.imageUrl,
        });

    } catch (error) {
        console.error("Error in imageUpload:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}


async function videoUpload(req, res) {
    try {
        const { email, tags, size } = req.body;

        if (!req.files || !req.files.videoFile) {
            return res.status(400).json({
                success: false,
                message: "Please upload a file"
            });
        }

        const file = req.files.videoFile;
        if (file.size > 1024 * 1024 * 2) {
            return res.status(400).json({ success: false, message: "File size is large than 2 MB" });
        }

        const fileType = file.name.split('.').pop().toLowerCase();
        const supportedTypes = ['mp4', 'mov', 'avi', 'mkv'];

        // Validate file type
        if (!supportedTypes.includes(fileType)) {
            return res.status(400).json({ success: false, message: "Please upload a valid mp4 file" });
        }
        // Upload file to Cloudinary
        const videoUrl = await uploadToCloudinary(file, 'file_up');


        // Save file details to database
        const savedFile = await File.create({ filename: file.name, videoUrl: videoUrl.secure_url, email, tags, size });
        res.status(201).json({ success: true, message: "Video uploaded successfully", file: savedFile });
    }
    catch (error) {
        console.error("Error in videoUpload:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}

async function imageReducerUpload(req, res) {
    try {
        // Data fetch
        const { email, tags, size } = req.body;
        if (size > 5242880) {
            return res.status(400).json({ success: false, message: "File size is large than 5 MB" });
        }

        // Check if files exist and handle multiple files
        if (!req.files || !req.files.imageFile) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const file = req.files.imageFile;

        // Validation
        const supportedTypes = ['jpeg', 'png', 'jpg'];
        const fileExtension = file.name.split('.').pop().toLowerCase();

        if (!supportedTypes.includes(fileExtension)) {
            return res.status(400).json({
                success: false,
                message: "Only jpeg, jpg, png files are allowed"
            });
        }

        // Upload to Cloudinary with quality reduce
        const imageUrl = (await uploadToCloudinary(file, "file_up", 10)).secure_url;

        console.log("Cloudinary response:", imageUrl);

        // DB save
        const savedFile = await File.create({
            filename: file.name,
            imageUrl,
            email,
            tags,
            size
        });

        res.status(201).json({
            success: true,
            message: "File uploaded successfully",
            imageUrl: savedFile.imageUrl,
        });

    } catch (error) {
        console.error("Error in imageUpload:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}

function localFileUpload(req, res) {
    try {
        const file = req.files.file; // object
        if (!req.files || !req.files.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        // Create a unique file path
        const uploadPath = path.join(__dirname, 'uploads', `${Date.now()}_${file.name}`);
        file.mv(uploadPath, (err) => {
            if (err) {
                console.error("Error moving file:", err);
                return res.status(500).json({ success: false, message: "File upload failed", error: err.message });
            }
        });

        res.json({
            success: true,
            message: "Local file uploaded successfully",
            filePath: uploadPath
        });

    } catch (error) {
        console.error("Unexpected error:", error);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
}

module.exports = {
    imageUpload,
    videoUpload,
    imageReducerUpload,
    localFileUpload,
    log,
    give
};
