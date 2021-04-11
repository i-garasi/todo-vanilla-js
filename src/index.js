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

  const removeButton = document.createElement("button");
  removeButton.innerText = "削除";

  onClickDone(completeButton, removeButton);

  // 削除ボタン押下時の処理
  removeButton.addEventListener("click", () => {
    removeTask(removeButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(removeButton);
  document.getElementById("incomplete-list").appendChild(div);
};

// 完了ボタン押下時の処理
const onClickDone = (completeButton, removeButton) => {
  completeButton.addEventListener("click", () => {
    const target = completeButton.parentNode;
    const text = target.firstElementChild.innerText;
    removeTask(target);
    target.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    onClickBack(completeButton, removeButton, backButton);

    target.appendChild(li);
    target.appendChild(backButton);
    document.getElementById("complete-list").appendChild(target);
  });
};

// 戻るボタン押下時の処理
const onClickBack = (completeButton, removeButton, backButton) => {
  backButton.addEventListener("click", () => {
    const target = backButton.parentNode;
    const text = target.firstElementChild.innerText;
    document.getElementById("complete-list").removeChild(target);
    target.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    target.appendChild(li);
    target.appendChild(completeButton);
    target.appendChild(removeButton);
    document.getElementById("incomplete-list").appendChild(target);
  });
};

const removeTask = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
