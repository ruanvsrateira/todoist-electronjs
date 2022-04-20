const ulElement = document.querySelector("ul");
const buttonAddTask = document.querySelector(".addButton");
const body = document.querySelector("body");

body.addEventListener("click", (e) => {
    const el = e.target;

    if(el.classList.contains("btnDel")) {
        el.parentElement.remove();
    }
});

body.addEventListener("keydown", (e) => {
    const el = e.key;

    if(el == "Enter") {
        const nome = document.querySelector("input").value;

        addTask(nome);
    }
})

const addTask = (nome) => {
    if(!nome) {
        return ;
    }

    const li = document.createElement("li");
    const input = document.querySelector('input');
    const button = document.createElement("button");

    li.innerText = nome;

    ulElement.appendChild(li)
    input.value = "";

    button.innerText = "-";
    button.setAttribute("class", "btnDel")
    button.setAttribute("onclick", "() => alert(123)")
    li.appendChild(button);

    const btnDel = document.querySelector("li button");
}

const delTask = (li) => {
    li.remove()
}

