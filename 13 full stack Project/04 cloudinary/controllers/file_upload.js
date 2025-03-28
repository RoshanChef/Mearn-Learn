const File = require('../models/file');
const path = require('path');
const cloudinary = require('cloudinary').v2;

async function uploadToCloudinary(file, folder) {
    let options = { folder };
    options.resource_type = 'auto';
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
        const imageUrl = await uploadToCloudinary(file, "first_up");

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

        const fileType = file.name.split('.').pop().toLowerCase();
        const supportedTypes = ['mp4', 'mov', 'avi', 'mkv'];

        // Validate file type
        if (!supportedTypes.includes(fileType)) {
            return res.status(400).json({ success: false, message: "Please upload a valid mp4 file" });
        }
        // Upload file to Cloudinary
        const videoUrl = await uploadToCloudinary(file, 'file_up');
        console.log('video url => ', videoUrl.secure_url);

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

function imageReducerUpload(req, res) {
    res.status(501).json({ message: "Image reducer upload not implemented yet" });
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
    localFileUpload
};
