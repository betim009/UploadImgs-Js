const { insertImage, getAllImages, getImageById } = require("../models/images");

const saveImage = async (file, name, descricao, preco) => {
    const image = file.buffer;
    await insertImage({ image, name, descricao, preco });
};

const fetchAllImages = async () => {
    return await getAllImages();
};

const fetchImageById = async (id) => {
    return await getImageById(id);
};

module.exports = {
    saveImage,
    fetchAllImages,
    fetchImageById
};
