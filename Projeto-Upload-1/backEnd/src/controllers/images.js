const multer = require('multer');
const { saveImage, fetchAllImages, fetchImageById } = require('../services/images');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image');

async function postImage(req, res) {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).send('Erro no upload');
    }
    const { name, descricao, preco } = req.body; // Supondo que você envia esses dados junto com a imagem
    try {
      await saveImage(req.file, name, descricao, preco);
      res.send('Imagem salva com sucesso!');
    } catch (error) {
      res.status(500).send('Erro ao salvar imagem');
    }
  });
}

const getAllImages = async (req, res) => {
  try {
    const images = await fetchAllImages();
    // Mapeia cada imagem para retornar todas as informações do produto
    const mappedImages = images.map(image => ({
      id: image.id,
      name: image.name,
      descricao: image.descricao,
      preco: image.preco,
      image: image.image ? image.image.toString('base64') : null
    }));
    res.json(mappedImages);
  } catch (error) {
    console.error('Erro ao buscar imagens:', error);
    res.status(500).send('Erro ao buscar imagens');
  }
};

const getImageById = async (req, res) => {
  const id = req.params.id;
  try {
    const image = await fetchImageById(id);
    if (!image) {
      return res.status(404).send('Imagem não encontrada');
    }
    res.writeHead(200, { 'Content-Type': 'image/jpeg' }); // Defina o Content-Type apropriado
    res.end(image.image);
  } catch (error) {
    console.error('Erro ao buscar imagem por ID:', error);
    res.status(500).send('Erro ao buscar imagem por ID');
  }
};

module.exports = {
  postImage,
  getAllImages,
  getImageById
};
