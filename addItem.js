var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var mainArray = [];
var selectedRow = null;

var previousData = JSON.parse(window.localStorage.getItem("localData"));
if (previousData) {
  mainArray = previousData;
}

function displayDetails() {
  event.preventDefault();

  var inputData = {
    id: document.getElementById("todoId").value,
    name: document.getElementById("todoInput").value,
    progress: document.getElementById("inputGroupSelect01").value,
  };
  mainArray.push(inputData);
  localStorage.setItem("localData", JSON.stringify(mainArray));
  reset();
}

function reset() {
  document.getElementById("todoId").value = "";
  document.getElementById("todoInput").value = "";
  document.getElementById("inputGroupSelect01").value = "";
}
