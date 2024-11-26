//input text
const entry = document.createElement("input");
entry.id="input_Field";

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

// call function
document.getElementById("validate").addEventListener("click", add_comment);
//press enter
document.getElementById("input_Field").addEventListener("keypress",function(event){
    if (event.key === "Enter") {
        //
        event.preventDefault();
        //call function
        add_comment();
    }
});

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

function add_comment() {
    try {
        if (entry.value === "") {
            throw new Error("field is empty");
        }
        if (/^[a-zA-Z\s]+$/.test(entry.value) === false) {
            entry.value = "";
            throw new Error("not only letters");
        }
        let fieldText = document.createElement("div");
        let fieldTime = document.createElement("div");
        let fieldAll = document.createElement("div");
        // append text in page
        fieldText.append(entry.value);
        fieldAll.appendChild(fieldText);
        //reset 
        entry.value = "";
        //append time in page
        fieldTime.append(Timet_today());
        fieldAll.appendChild(fieldTime);
        //style 
        fieldAll.style.display = 'flex';
        fieldAll.style.gap = '10px';
        document.body.appendChild(fieldAll);
    } catch (error) {
        console.error("Error detected:", error.message);
    }
};


