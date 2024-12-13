import fs from "fs";
import { data_send } from "../js/script.js";

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

write_file(data_send());

