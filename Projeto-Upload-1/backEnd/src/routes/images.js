const express = require('express');
const { postImage, getAllImages, getImageById } = require('../controllers/images');


const router = express.Router();
router.get('/', getAllImages);
router.get('/:id', getImageById);
router.post('/', postImage);

module.exports = router;