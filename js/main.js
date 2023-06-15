const taskNotification = document.querySelector("[task-notification]");
const finishNotification = document.querySelector("[finish-notification]");
const listContainer = document.querySelector("[list-container]");
const input = document.querySelector("[input-list]");
const inputSubmit = document.querySelector("[ input-submit]");

let storeData = [];

inputSubmit.addEventListener("click", () => {
  storeData.push({
    id: Date.now(),
    text: input.value,
    finish: false,
  });
  input.value = "";
  render();
});

function render() {
  storeData.forEach((data) => {
    const listItem = document.createElement("div");
    const text = document.createElement("div");
    const icon = document.createElement("i");

    listItem.className = "list-item";
    text.className = "list-text";
    text.innerHTML = data.text;
    icon.className = "fas fa-trash-alt delete-list";

    listItem.appendChild(text);
    listItem.appendChild(icon);
    listcontainer.appendChild(listItem);
  });
}
