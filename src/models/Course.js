class Course {
    constructor(code, title) {
        this.code = code;
        this.title = title;
    }

    static validate(course) {
        if (!course.code || !course.title) {
            throw new Error("Course code and title are required.");
        }
        // Additional validation logic can be added here
    }
}

let courseList = [
    new Course("COIS1010", "Digital World"),
    new Course("COIS1020", "Intro to Programming"),
    new Course("COIS2020", "Data Structures"),
    new Course("COIS2430", "Web Dev I"),
    new Course("COIS3430", "Web Dev II"),
];

const addCourse = (course) => {
    Course.validate(course);
    courseList.push(new Course(course.code, course.title));
};

const deleteCourse = (code) => {
    const index = courseList.findIndex(course => course.code === code);
    if (index !== -1) {
        courseList.splice(index, 1);
    }
};

const searchCourses = (query) => {
    return courseList.filter(course => 
        course.title.toLowerCase().includes(query.toLowerCase()) || 
        course.code.toLowerCase().includes(query.toLowerCase())
    );
};

const sortCourses = (key) => {
    return courseList.sort((a, b) => a[key].localeCompare(b[key]));
};

export { Course, courseList, addCourse, deleteCourse, searchCourses, sortCourses };