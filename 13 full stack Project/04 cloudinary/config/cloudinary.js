const cloudinary = require('cloudinary').v2;

exports.cloudinaryConnect = () => {
    try {
        cloudinary.config({
            cloud_name: 'dfxv7kj1t', 
            api_key: '113545286256253',
            api_secret: '1sOej0kYp2KJtdBqtOMZ_Tgg-hE'
        });
    } catch (error) {
        console.log(error);
    }
}


