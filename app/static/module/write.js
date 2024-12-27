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

//// test start server 
/* 
import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

// Middleware pour parser les données JSON
app.use(express.json());

// Route pour sauvegarder les commentaires
app.post("/save-comment", (req, res) => {
    const { text } = req.body;
    const filepath = path.resolve("app/backend/save_comments.txt");

    fs.appendFile(filepath, text + "\n", (err) => {
        if (err) {
            console.error("Error while writing to file:", err);
            return res.status(500).json({ success: false, message: "Failed to save comment" });
        }
        console.log("File modified successfully");
        res.json({ success: true, message: "Comment saved successfully" });
    });
});

// Démarre le serveur
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
*/