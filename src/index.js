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
    const removeTarget = completeButton.parentElement;
    removeTask(removeTarget);
  });

  const removeButton = document.createElement("button");
  removeButton.innerText = "削除";
  removeButton.addEventListener("click", () => {
    const removeTarget = removeButton.parentElement;
    removeTask(removeTarget);
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
