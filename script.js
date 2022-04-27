const ulElement = document.querySelector("ul");
const buttonAddTask = document.querySelector(".addButton");
const body = document.querySelector("body");

body.addEventListener("click", (e) => {
    const el = e.target;

    if(el.classList.contains("iconDel")) {
        el.parentElement.remove();
    }

    if(el.classList.contains("iconCheck")) {
        if(!el.parentElement.classList.contains("checked")) {
            el.parentElement.setAttribute("class", "checked")
            document.querySelector(".iconCheck").style.color = "#e73f5d"
        }

        else {
            el.parentElement.removeAttribute("class")
            
            document.querySelector(".iconCheck").style.color = "green"
        }
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
    const buttonDel = document.createElement("i");
    const buttonCheck = document.createElement("i")

    li.innerText = nome;

    ulElement.appendChild(li)
    input.value = "";

    buttonDel.setAttribute("class", "fa-solid fa-circle-minus iconDel");
    buttonCheck.setAttribute("class", "fa-solid fa-circle-check iconCheck");

    li.appendChild(buttonDel);
    li.appendChild(buttonCheck);
}

