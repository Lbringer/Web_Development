const express = require('express');
const catchAsync = require('../utilis/catchAsync');
const router = express.Router();
const { isLoggedin, isAuthor, validateCampground } = require('../middleware');
const campground = require('../controllers/campground');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.get('/', catchAsync(campground.index));

router.get('/new', isLoggedin, campground.newForm);

router.post('/', isLoggedin, upload.array('image'), validateCampground, catchAsync(campground.new));

router.get('/:id', catchAsync(campground.show));

router.get('/:id/edit', isLoggedin, isAuthor, catchAsync(campground.editForm));

router.put('/:id', isLoggedin, isAuthor, upload.array('image'), validateCampground, catchAsync(campground.edit));

router.delete('/:id', isLoggedin, isAuthor, catchAsync(campground.delete));

module.exports = router;