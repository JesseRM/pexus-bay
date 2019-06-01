const express = require('express');
const router = express.Router();
const imagesController = require('../../controllers/imageSources');

router.get('/pixabay/:term/:page', imagesController);

module.exports = router;