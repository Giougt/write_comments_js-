/*import {export_time} from "./app/run.py";
//const test = export_time();
console.log(test);  */


//// part script 
const fs = require ("fs"); 

const filepath = "./app/backend/save_comments.txt"; 
fs.writeFile(filepath, "hellozzz", () => {
    if (err) {
        console.error("Error file not modified ", err);
    } else {
        console.log("file modified sucess");
    }
});




