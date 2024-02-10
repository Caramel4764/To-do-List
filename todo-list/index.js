const itemList = document.getElementById("itemList");
const textInput = document.getElementById("textInput");
const addButton = document.getElementById("addButton")
dragElement(document.getElementById("addMenu"));

addButton.addEventListener("click", function() {
    addItem();
});
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addItem();
    }
});
function capitalize(word) {
    let wordSpliced = "";
    for (let i = 0; i < word.length; i++) {
        if (i==0) {
            wordSpliced += word[0].toUpperCase();
        } else {
            wordSpliced += word[i];
        }
    }
    return wordSpliced;
}
function addItem(){
    if (textInput.value != "") {
        let newItem = document.createElement("li");
        let text = capitalize(textInput.value);
        newItem.innerHTML = text;
        itemList.appendChild(newItem);
        textInput.value = "";
    }
}
function dragElement(elmnt) {
  var xf = 0, yf = 0, xi = 0, yi = 0;
    elmnt.onmousedown = dragMouseDown;
  function dragMouseDown(e) {
    // beginning mouse position
    xi = e.clientX;
    yi = e.clientY;
    document.onmouseup = closeDragElement;
    //when mouse moves, calculate moved location and speed
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    //calculate changes to the new cursor position:
    xf = xi - e.clientX;
    yf = yi - e.clientY;
    //get new inital mouse position
    xi = e.clientX;
    yi = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - yf) + "px";
    elmnt.style.left = (elmnt.offsetLeft - xf) + "px";
  }
  function closeDragElement() {
    //no more events
    document.onmouseup = null;
    document.onmousemove = null;
  }
}