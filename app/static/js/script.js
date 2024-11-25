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
        let fieldText = document.createElement("p");
        let fieldTime = document.createElement("p");
        // append text in page
        fieldText.append(entry.value);
        document.body.appendChild(fieldText);
        //reset 
        entry.value = "";
        //append time in page
        fieldTime.append(Timet_today());
        document.body.appendChild(fieldTime);

    } catch (error) {
        console.error("Error detected:", error.message);
    }
})

function Timet_today() {
    let today = new Date();
    today = today.toTimeString();
    tab = []; 
    tab2= [];
    for (let index = 0; index < 9; index++) {
        tab.push(today[index]);
    }
    for (let index = 0; index < tab.length; index++) {
        tab2 = tab2+ tab[index];
    }
    return tab2
};



