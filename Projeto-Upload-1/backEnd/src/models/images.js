const connection = require('../db/connection');

async function insertImage(img) {
    const { image, name, descricao, preco } = img;
    try {
        const [result] = await connection.execute(
            'INSERT INTO images (image, name, descricao, preco) VALUES (?, ?, ?, ?)',
            [image, name, descricao, preco]
        );
        return result;
    } catch (error) {
        console.error('Erro ao inserir imagem:', error);
        throw error;
    }
}

async function getAllImages() {
    try {
        const [results] = await connection.execute('SELECT id, name, descricao, preco, image FROM images');
        return results;
    } catch (error) {
        console.error('Erro ao buscar imagens:', error);
        throw error;
    }
}

async function getImageById(id) {
    try {
        const [[result]] = await connection.execute('SELECT image FROM images WHERE id = ?', [id]);
        return result; // Retorna apenas o primeiro resultado encontrado
    } catch (error) {
        console.error('Erro ao buscar imagem por ID:', error);
        throw error;
    }
}

module.exports = {
    insertImage,
    getAllImages,
    getImageById
};
