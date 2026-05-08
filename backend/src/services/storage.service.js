const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file) { 
    try {
        const result = await imagekit.files.upload({
            // Convert the buffer to a base64 string
            file: file.buffer.toString("base64"), 
            fileName: file.originalname, // Use the real name (e.g., "Screenshot.png")
        });

        return result;

    } catch (error) {
        console.log("ImageKit Upload Error:", error);
        throw error;
    }
}
module.exports = uploadFile;