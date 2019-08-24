const express = require('express');
const router = express.Router();
const imageBufferController = require('../../controllers/imageDownload');
const imageURIController = require('../../controllers/imageURIs');

router.get('/pixabay/:term/:page', imageURIController.getPixabayURIs);
router.get('/pexels/:term/:page', imageURIController.getPexelsURIs);
router.get('/unsplash/:term/:page', imageURIController.getUnsplashURIs);
router.get('/download/*', imageBufferController);

module.exports = router;