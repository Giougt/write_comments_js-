alert("hello");

const entry = document.createElement("input");
document.body.appendChild(entry);

//// part script 
const fs = require("fs"); 

const filepath = "./app/backend/save_comments.txt"; 
fs.writeFile(filepath, "hellozziiiiz", () => {
    if (err) {
        console.error("Error file not modified ", err);
    } else {
        console.log("file modified sucess");
    }
});

console.log("hello");



