import fs from "fs";

function write_file(text) {
    const filepath = "./app/backend/save_comments.txt";
    fs.writeFile(filepath, text, () => {
        if (err) {
            console.error("Error file not modified ", err);
        } else {
            console.log("file modified sucess");
        }
    });
};

export default write_file;

