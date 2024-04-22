const inputHandler = document.querySelector(".todolist-addlist-input");
const addListBtn = document.querySelector(".todolist-addlist-btn");
const renderingList = document.querySelector(".todolist-rendering-lists");
const deleteWholeListBtn = document.querySelector(".todolist-wholelist-delete");
let listIdNumber = 1;
let listDeleteIdNumber = 1;

function newListItemHandler() {
  const newListItem = document.createElement("li");
  newListItem.classList.add("todolist-list");
  newListItem.id = listIdNumber;
  listIdNumber = listIdNumber + 1;

  const newListItemType = document.createElement("input");
  newListItemType.type = "checkbox";

  const newListItemDeleteBtn = document.createElement("button");
  newListItemDeleteBtn.classList.add("todolist-list-delete");
  newListItemDeleteBtn.id = listDeleteIdNumber;
  listDeleteIdNumber = listDeleteIdNumber + 1;

  const newListItemDeleteImg = document.createElement("img");
  newListItemDeleteImg.src = "./exit.png";

  const newListItemValue = document.createElement("span");
  newListItemValue.textContent = inputHandler.value;

  newListItem.appendChild(newListItemType);
  newListItem.appendChild(newListItemValue);
  newListItemDeleteBtn.appendChild(newListItemDeleteImg);
  newListItem.appendChild(newListItemDeleteBtn);

  newListItemType.addEventListener("change", (e) => {
    if (e.target.checked) {
      newListItem.classList.remove("todolist-list");
      newListItem.classList.add("todolist-list-completed");
    } else {
      newListItem.classList.remove("todolist-list-completed");
      newListItem.classList.add("todolist-list");
    }
  });

  newListItemDeleteBtn.addEventListener("click", () => {
    renderingList.removeChild(newListItem);
  });

  renderingList.appendChild(newListItem);
  inputHandler.value = "";
}

addListBtn.addEventListener("click", () => {
  if(inputHandler.value){
    newListItemHandler()
  }
});

inputHandler.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && inputHandler.value) {
    newListItemHandler();
    e.preventDefault();
  }
});

deleteWholeListBtn.addEventListener("click", () => {
  renderingList.replaceChildren();
});