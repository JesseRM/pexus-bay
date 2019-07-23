const express = require('express');
const router = express.Router();
const imagesController = require('../../controllers/imageSources');
const getImageBuffer = require('../../controllers/imageDownload');

router.get('/pixabay/:term/:page', imagesController.getPixabay);
router.get('/pexels/:term/:page', imagesController.getPexels);
router.get('/unsplash/:term/:page', imagesController.getUnsplash);
router.get('/download/*', getImageBuffer);

module.exports = router;