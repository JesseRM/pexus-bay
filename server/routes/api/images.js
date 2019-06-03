const express = require('express');
const router = express.Router();
const imagesController = require('../../controllers/imageSources');

router.get('/pixabay/:term/:page', imagesController.getPixabay);
router.get('/pexels/:term/:page', imagesController.getPexels);

module.exports = router;