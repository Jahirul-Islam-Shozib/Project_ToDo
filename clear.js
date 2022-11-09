var clearArr = [];
var dataFormStorage = JSON.parse(window.localStorage.getItem("localData"));
if (dataFormStorage) {
  clearArr = dataFormStorage;
}

function warningWindow() {
  var table = document.getElementById("storeList3");
  var warningMsg = document.getElementById("warning");
  table.classList.remove("hidden");
  warningMsg.classList.add("hidden");
}

for (let i = 0; i < dataFormStorage.length; i++) {
  if (dataFormStorage[i].progress === "clear") {
    warningWindow();
    var table = document
      .getElementById("storeList3")
      .getElementsByTagName("tbody")[0];
    var row = table.insertRow(table.length);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = dataFormStorage[i].serialNo;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = dataFormStorage[i].taskName;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = dataFormStorage[i].date;
    var cell4 = row.insertCell(3);
    cell4.innerHTML = dataFormStorage[i].shift;
    var cell5 = row.insertCell(4);
    cell5.innerHTML = dataFormStorage[i].time;
    var cell6 = row.insertCell(5);
    cell6.innerHTML = dataFormStorage[i].progress;
    var cell7 = row.insertCell(6);
    cell7.innerHTML = `<button class="btn btn-danger btn-sm" onclick="onRemove(this)">Remove</button>`;
  }
}
function onRemove(table) {
  var confirmRemove = confirm("Are you confirm to remove ToDo ?");
  if (confirmRemove) {
    var selectedRow = table.parentElement.parentElement;
    clearArr.splice(selectedRow.sectionRowIndex - 1, 1);
    localStorage.setItem("localData", JSON.stringify(clearArr));
    var row = table.parentElement.parentElement;
    document.getElementById("storeList3").deleteRow(row.rowIndex);
    // location.reload();
  }
}
