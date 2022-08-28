const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList() {
  let newTask = inputEl.value;
  const liEl = document.createElement("li");
  liEl.innerText = newTask;
  ulEl.append(liEl);
  inputEl.value = "";
  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `
  <i class="fa-solid fa-circle-check">
  `;
  liEl.append(checkBtnEl);
  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `
  <i class="fas fa-trash"></i>
  `;
  liEl.append(trashBtnEl);

checkBtnEl.addEventListener("click", () => {
  liEl.classList.toggle("checked");
});

trashBtnEl.addEventListener("click", () => {
  liEl.remove();
});
}

function updateLocalStorage()