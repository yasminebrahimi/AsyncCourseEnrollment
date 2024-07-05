



//1. login user => email
//2. enrolled courses based on email 
//3. episode

const { use } = require("express/lib/application");

function loginuser(email, password, callback){
    setTimeout(() =>{
        callback({email}); 
    }, 2000); 
}


function findEnrolledCourses(email, callback){
    setTimeout(() => {
        callback(["React.js", "Next.js", "Node.js"]); 
    }, 1000); 
}


loginuser("user@gmail.com", "12345", (userData) =>{
    console.log(userData.email); 
}); 