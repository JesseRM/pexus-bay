const express = require('express');
const router = express.Router();
const imageDownloadController = require('../../controllers/imageDownload');
const imageURIController = require('../../controllers/imageURIs');

router.get('/pixabay/:term/:page', imageURIController.getPixabayURIs);
router.get('/pexels/:term/:page', imageURIController.getPexelsURIs);
router.get('/unsplash/:term/:page', imageURIController.getUnsplashURIs);
router.get('/download/*', imageDownloadController.getImageBuffer);
router.post('/download/zip', imageDownloadController.createZip);

module.exports = router;