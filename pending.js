var newArray = [];
var dataFormStorage = JSON.parse(window.localStorage.getItem("localData"));
// console.log(dataFormStorage);
if (dataFormStorage) {
  newArray = dataFormStorage;
}

for (let i = 0; i < dataFormStorage.length; i++) {
  if (dataFormStorage[i].progress === "pending") {
    var table = document
      .getElementById("storeList1")
      .getElementsByTagName("tbody")[0];
    var row = table.insertRow(table.length);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = dataFormStorage[i].id;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = dataFormStorage[i].name;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = dataFormStorage[i].progress;
    //   `<button class="btn btn-primary btn-sm" type="button" disabled>
    //   <span
    //     class="spinner-border spinner-border-sm"
    //     role="status"
    //     aria-hidden="true"
    //   ></span>
    //   pending
    // </button>`;
    var cell4 = row.insertCell(3);
    cell4.innerHTML = `<button class="btn btn-primary btn-sm" onclick="onMoveComplete(this)">Move to Complete</button> <button class="btn btn-danger btn-sm" onclick="onMoveClear(this)">Move to Clear</button>`;
  }
}

function onMoveComplete(table) {
  debugger;
  var selectedRow = table.parentElement.parentElement;

  var updateInput = {
    id: selectedRow.cells[0].innerHTML,
    name: selectedRow.cells[1].innerHTML,
    progress: selectedRow.cells[2].innerHTML,
  };

  // var dataPresent = JSON.parse(window.localStorage.getItem("localData"));
  newArray = newArray.map((item) => {
    if (item.id === updateInput.id) {
      item.progress = "complete";
    }
    return item;
  });
  localStorage.setItem("localData", JSON.stringify(newArray));
  var row = table.parentElement.parentElement;
  console.log(row);
  document.getElementById("storeList1").deleteRow(row.rowIndex);
}

function onMoveClear(table) {
  debugger;
  var selectedRow = table.parentElement.parentElement;

  var updateInput = {
    id: selectedRow.cells[0].innerHTML,
    name: selectedRow.cells[1].innerHTML,
    progress: selectedRow.cells[2].innerHTML,
  };

  // var dataPresent = JSON.parse(window.localStorage.getItem("localData"));
  newArray = newArray.map((item) => {
    if (item.id === updateInput.id) {
      item.progress = "clear";
    }
    return item;
  });
  localStorage.setItem("localData", JSON.stringify(newArray));
  var row = table.parentElement.parentElement;
  console.log(row);
  document.getElementById("storeList1").deleteRow(row.rowIndex);
}
