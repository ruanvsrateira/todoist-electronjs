const ulElement = document.querySelector("ul");
const buttonAddTask = document.querySelector(".addButton");
const body = document.querySelector("body");

body.addEventListener("keydown", (e) => {
    const el = e.key;

    if(el == "Enter") {
        const nome = document.querySelector("input").value;

        addTask(nome);
    }
})

const addTask = (nome) => {
    const li = document.createElement("li");
    const input = document.querySelector('input');

    li.innerText = nome;

    ulElement.appendChild(li)
    input.value = "";
}