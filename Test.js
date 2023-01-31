const titleInput = document.getElementById("title-input");
const contentInput = document.getElementById("content-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", function () {
    const title = titleInput.value;
    const content = contentInput.value;
    if (!title || !content) {
        alert("Both title and Input fields are required!");
        return;
    }
   

    const todo = document.createElement("div");
    todo.classList.add("todo-item");
    todo.innerHTML = `
<div class="All-todo-task row">
<div class="title-data col-xs-9">
<h3 class="todo-title">${title}</h3>
<p class="todo-input">${content}</p>
</div>
<div class="col-sx-3 title-data-btn">
<button class="edit-button">!</button>
<button class="delete-button" data-toggle='modal' data-target='#myModal' onclick='ss()'>x</button>
</div>
</div>
`
; titleInput.value = "";
    contentInput.value = "";
    todoList.appendChild(todo);
    const editButton = todo.querySelector(".edit-button");
    editButton.addEventListener("click", function () {
       
        const h3 = todo.querySelector("h3");
        const p = todo.querySelector("p");
        titleInput.value = h3.textContent;
        contentInput.value = p.textContent;
       
       
        const saveButton = document.createElement("button");
        saveButton.textContent = "Update";
        saveButton.classList.add("save-button");
        todo.appendChild(saveButton);
    
        saveButton.addEventListener("click", function () {
            if (titleInput.value === "" || contentInput.value === "") {
                alert("Both title and Input fields are required!");
            } else {
                h3.textContent = titleInput.value;
                p.textContent = contentInput.value;
                todo.removeChild(saveButton);
                titleInput.value = "";
                contentInput.value = "";
            }
        });
    });
    

    
    const deleteButton = todo.querySelector(".delete-button");
deleteButton.addEventListener("click", function () {
    const popup = document.createElement("div");
    popup.innerHTML = `
        <p class='popup-title'>Delete this task? </p>
        <button class="yes-button">Yes</button>
        <button class="no-button">No</button>
    `;
    popup.style.backgroundColor = "#1B1A17";
    popup.style.padding = "20px";
    popup.style.position = "fixed";
    
    popup.style.top = "400px";
    popup.style.left = "50%";
    popup.style.color = "white";
    popup.style.width = "281px";
    popup.style.height = "143px";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    document.body.appendChild(popup);

    const yesButton = popup.querySelector(".yes-button");
    yesButton.addEventListener("click", function () {
        todoList.removeChild(todo);
        document.body.removeChild(popup);
    });

    const noButton = popup.querySelector(".no-button");
    noButton.addEventListener("click", function () {
        document.body.removeChild(popup);
    });
});

    todoList.appendChild(todo);
    
});
 
