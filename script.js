const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function add_task() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    save_data();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save_data();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save_data();
    }
}, false);

inputBox.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // Check if the Enter key is pressed
        add_task();
    }
});

function save_data()
{
    localStorage.setItem("data", listContainer.innerHTML)
}

function show_task()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
show_task();
