function sortCourses(courses, key) {
    return courses.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
}

function searchCourses(courses, searchTerm) {
    return courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        course.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

function validateCourse(course) {
    const { code, title } = course;
    if (!code || !title) {
        return false;
    }
    return true;
}

function deleteCourse(courses, code) {
    return courses.filter(course => course.code !== code);
}

export { sortCourses, searchCourses, validateCourse, deleteCourse };