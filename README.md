# README.md

# Course Management App

This is a Course Management application built with Express.js. It allows users to manage a list of courses, including adding, deleting, searching, and sorting courses. The application also includes input validation to ensure data integrity.

## Features

- **Add Courses**: Users can add new courses with a code and title.
- **Delete Courses**: Users can remove courses from the list.
- **Search Courses**: Users can search for courses by title or code.
- **Sort Courses**: Users can sort the course list based on different criteria.
- **Input Validation**: Ensures that all course data meets specified criteria before processing.

## Project Structure

```
course-management-app
├── src
│   ├── routes
│   │   ├── courseRoutes.js
│   │   └── index.js
│   ├── controllers
│   │   └── courseController.js
│   ├── models
│   │   └── Course.js
│   ├── middleware
│   │   └── validation.js
│   ├── utils
│   │   └── helpers.js
│   └── app.js
├── views
│   ├── layouts
│   │   └── main.ejs
│   ├── partials
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── home.ejs
│   ├── add.ejs
│   └── search.ejs
├── public
│   ├── css
│   │   └── styles.css
│   └── js
│       └── main.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd course-management-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.