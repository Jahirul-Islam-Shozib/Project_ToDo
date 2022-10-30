var dataFormStorage = JSON.parse(window.localStorage.getItem("localData"));
console.log(dataFormStorage);

for (let i = 0; i < dataFormStorage.length; i++) {
  if (dataFormStorage[i].progress === "pending") {
    var table = document
      .getElementById("storeList1")
      .getElementsByTagName("tbody")[0];
    var row = table.insertRow(table.length);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = dataFormStorage[i].name;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = `<button class="btn btn-primary btn-sm" type="button" disabled>
     <span
       class="spinner-border spinner-border-sm"
       role="status"
       aria-hidden="true"
     ></span>
     pending
   </button>`;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = `<button class="btn btn-outline-primary btn-sm" onclick="onMoveComplete(this)">Move to Complete</button><button class="btn btn-outline-danger btn-sm" onclick="onMoveClear(this)">Move to Clear</button>`;
  }
}

var selectedRow = null;

var clearArray = [];
var previousClearData = JSON.parse(window.localStorage.getItem("clearData"));
if (previousClearData) {
  clearArray = previousClearData;
}

function onMoveClear(table) {
  selectedRow = table.parentElement.parentElement;
  // console.log(selectedRow);
  var moveItem = selectedRow.cells[0].innerHTML;
  clearArray.push(moveItem);
  //console.log(moveToClear);
  // console.log(clearArray);
  localStorage.setItem("clearData", JSON.stringify(clearArray));
}
