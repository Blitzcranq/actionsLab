// src/middleware/validation.js

const { body, validationResult } = require('express-validator');

const validateCourse = [
    body('code')
        .notEmpty().withMessage('Course code is required')
        .isLength({ min: 6, max: 6 }).withMessage('Course code must be 6 characters long'),
    body('title')
        .notEmpty().withMessage('Course title is required')
        .isLength({ min: 5 }).withMessage('Course title must be at least 5 characters long'),
];

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateCourse,
    handleValidationErrors,
};