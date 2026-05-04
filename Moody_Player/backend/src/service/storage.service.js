const Imagekit = require("@imagekit/nodejs");

const imagekit = new Imagekit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(file) {
    if (!file || !file.buffer) {
        throw new Error("Invalid file");
    }

    const result = await imagekit.files.upload({
        file: file.buffer.toString("base64"),
        fileName: Date.now() + "_song",
        folder: "/songs"
    });

    return result;
}

module.exports = uploadFile;