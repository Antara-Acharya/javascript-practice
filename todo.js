const input = document.getElementById("todoInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("todoList");

button.addEventListener("click", addTodo);

function addTodo() {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => li.remove());

  // Done button
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
    doneBtn.textContent =
      doneBtn.textContent === "Done" ? "Undo" : "Done";
  });

  li.appendChild(deleteBtn);
  li.appendChild(doneBtn);
  list.appendChild(li);

  input.value = "";
}
