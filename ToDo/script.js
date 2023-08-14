const inputData = document.querySelector(".todo-input");
const listItems = document.querySelector(".listItems");
inputData.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (inputData.value === "") {
      alert("Please! write list to add");
    } else {
      let liItem = document.createElement("li");
      liItem.innerHTML = inputData.value;
      listItems.appendChild(liItem);
      let deleteIcon = document.createElement("span");
      deleteIcon.innerHTML = "\u00d7";
      liItem.appendChild(deleteIcon);
    }
    inputData.value = "";
    storeData();
    console.log(inputData.value);
  }
});

listItems.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      storeData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      storeData();
    }
  },
  false
);
console.log(inputData.value);

function storeData() {
  localStorage.setItem("taskList", listItems.innerHTML);
}

function getData() {
  listItems.innerHTML = localStorage.getItem("taskList");
  console.log(localStorage.getItem("taskList"));
}
getData();
