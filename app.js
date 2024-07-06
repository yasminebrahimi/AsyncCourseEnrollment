



// Function to simulate user login, resolves with user data after 2 seconds
function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "user@gmail.com" && password === "password") {
                resolve({ email });
            } else {
                reject(new Error("Invalid credentials"));
            }
        }, 2000); 
    }); 
}


// Function to simulate fetching enrolled courses, resolves with courses after 1 second
function findEnrolledCourses(email){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "user@gmail.com") {
                resolve(["React.js", "Next.js", "Node.js"]); 
            } else {
                reject(new Error("User not found"));
            }
        }, 1000); 
    }); 
}


// Function to simulate fetching episodes of a course, resolves with episodes after 2 seconds
function getEpisodes(courseTitle){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (courseTitle === "React.js") {
                resolve(["E01", "E02", "E03"]); 
            } else {
                reject(new Error("Course not found"));
            }
        }, 2000);
    }); 
} 



loginUser("user@gmail.com", "password")
.then((userData) => findEnrolledCourses(userData.email))
.then((courses) => getEpisodes(courses[0]))
.then((episodes) => console.log(episodes))
.catch((err) => console.log(err.message)); 
