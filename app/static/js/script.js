
const entry = document.createElement("input");
document.body.appendChild(entry);

const add= document.createElement("button");
add.innerText= "valide";
add.id="validate"
document.body.appendChild(add);

Object.assign(entry.style, {
    backgroundColor: "black",
    color: "white"
});
Object.assign(add.style,{
    backgroundColor: "red",
    color: "white"
});

document.getElementById("validate").addEventListener("click", function() {
    let b= document.createElement("p");
    b.append(entry.value);
    document.body.appendChild(b);
})

console.log("hello");



