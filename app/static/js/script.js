

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
changeColor.id= "tagColor";

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
    let tab = []; 
    let tab2= [];
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
        //style fieldAll
        Object.assign(fieldAll.style,{
            display : "flex",
            gap : "10px",
            backgroundColor : "",
            marginBottom : "15px",
            width : "fit-content",
            overflow : "hidden",
            flexShrink : "0"
         });
        // append text in page
        fieldText.append(entry.value);
        fieldAll.appendChild(fieldText);
        //reset 
        entry.value = "";
        //append time in page
        fieldTime.append(Timet_today());
        fieldAll.appendChild(fieldTime);
        //call function color
        colorize(fieldAll,fieldText,fieldTime);
        document.body.appendChild(fieldAll);
        // export data 
        let data_message = fieldAll.value;
        return data_message;
    } catch (error) {
        console.error("Error detected:", error.message);
    }
};

function colorize(ele,text,time) {
    let colorBack = document.getElementById("tagColor").value;
    ele.style.backgroundColor = colorBack;
    text.style.color = "white";
    time.style.color = "white";
};


export function data_send(){
    let data = add_comment();
    return data;
}
