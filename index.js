const itemList = document.getElementById("itemList");
const textInput = document.getElementById("textInput");
const addButton = document.getElementById("addButton")

addButton.addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.innerHTML = textInput.value;
    itemList.appendChild(newItem);
    textInput.value = "";
})