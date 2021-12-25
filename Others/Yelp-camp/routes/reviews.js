const express = require('express');
const catchAsync = require('../utilis/catchAsync');
const { validateReview, isLoggedin, isReviewAuthor } = require('../middleware');
const review = require('../controllers/review');

const router = express.Router({ mergeParams: true });

router.post('/', isLoggedin, validateReview, catchAsync((review.new)));

router.delete('/:reviewId', isLoggedin, isReviewAuthor, catchAsync(review.delete));

module.exports = router;