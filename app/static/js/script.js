//input text
const entry = document.createElement("input");

//button send texte and color 
const add= document.createElement("button");
add.innerText= "valide";
add.id="validate"

//settup color 
const changeColor = document.createElement("input");
changeColor.type = "color";

Object.assign(entry.style, {
    backgroundColor: "black",
    color: "white"
});
Object.assign(add.style,{
    backgroundColor: "red",
    color: "white"
});

//append in document part 
document.body.appendChild(entry);
document.body.appendChild(changeColor);
document.body.appendChild(add);

// get , add , check value  
document.getElementById("validate").addEventListener("click", function() {
    try {
        if (entry.value === "") {
            throw new Error("field is empty");
        }
        if (/^[a-zA-Z\s]+$/.test(entry.value) === false) {
            entry.value = "";
            throw new Error("not only letters");
        }
        let b = document.createElement("p");
        b.append(entry.value);
        document.body.appendChild(b);
        entry.value = "";
    } catch (error) {
        console.error("Error detected:", error.message);
    }
})



