const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href", "https://www.amazon.com");
console.log(link.getAttribute("href"));

// Assuming nav items have the class "nav-item"
const navitems = document.getElementsByClassName("nav-item");

for (let i = 0; i < navitems.length; i++) {
    const navitem = navitems[i];
    // navitem.style.backgroundColor = "#fff";
    navitem.style.color = "green";
}

const Headline = document.querySelector(".headline");
Headline.innerHTML = "<h1> Inner HTML changed </h1>";

const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);
sectionTodo.classList.remove("container");
sectionTodo.classList.toggle("bg-dark");
sectionTodo.classList.toggle("bg-dark");
sectionTodo.classList.remove("bg-dark");

const sectionTodo1 = document.querySelector(".todo-list");
todoList.innerHTML = todoList.innerHTML + <li>New Todo</li>