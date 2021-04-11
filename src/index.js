import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    removeTask(completeButton.parentElement);
  });

  const removeButton = document.createElement("button");
  removeButton.innerText = "削除";
  removeButton.addEventListener("click", () => {
    removeTask(removeButton.parentElement);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(removeButton);

  document.getElementById("incomplete-list").appendChild(div);
};

const removeTask = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
