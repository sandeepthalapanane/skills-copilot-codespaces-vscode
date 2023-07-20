// Create web server

// Import Express
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController.js');

// Middleware for authentication
const auth = require('../middleware/auth.js');

// Middleware for authorization
const authz = require('../middleware/authz.js');

// @route   POST api/comments
// @desc    Create a comment
// @access  Private
router.post('/', auth, commentController.createComment);

// @route   GET api/comments
// @desc    Get all comments
// @access  Public
router.get('/', commentController.getAllComments);

// @route   GET api/comments/:id
// @desc    Get a comment by id
// @access  Public
router.get('/:id', commentController.getCommentById);

// @route   PUT api/comments/:id
// @desc    Update a comment by id
// @access  Private
router.put('/:id', auth, commentController.updateComment);

// @route   DELETE api/comments/:id
// @desc    Delete a comment by id
// @access  Private
router.delete('/:id', auth, commentController.deleteComment);

module.exports = router;