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
    try{
        if (/^[a-zA-Z\s]+$/.test(entry.value) === false){
            throw new Error ("not only letter"); 
        }
    }catch (error){
        console.error("error is detect", error.message); 
    }
    if (entry.value !== ""){
    let b= document.createElement("p");
    b.append(entry.value);
    document.body.appendChild(b);
    entry.value = "";
    }
    else{
        console.error("field is empty")
    }
})



