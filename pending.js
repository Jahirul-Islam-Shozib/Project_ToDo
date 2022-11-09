var newArray = [];
var dataFormStorage = JSON.parse(window.localStorage.getItem("localData"));
// console.log(dataFormStorage);
if (dataFormStorage) {
  newArray = dataFormStorage;
}

function warningWindow() {
  var table = document.getElementById("storeList1");
  var warningMsg = document.getElementById("warning");
  table.classList.remove("hidden");
  warningMsg.classList.add("hidden");
}

// function showWindow() {
//   var table = document.getElementById("storeList1");
//   var warningMsg = document.getElementById("warning");
//   table.classList.add("hidden");
//   warningMsg.classList.remove("hidden");
// }

// const noPending = dataFormStorage.some((item) => item.progress === "pending");
// console.log(noPending);

// if (noPending) {
//   warningWindow();
// } else {
//   showWindow();
// }

for (let i = 0; i < dataFormStorage.length; i++) {
  if (
    dataFormStorage[i].progress === "pending"
    // dataFormStorage[i].shift === "morning"
  ) {
    warningWindow();

    document.getElementById("storeList1");
    var table = document
      .getElementById("storeList1")
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
    cell7.innerHTML = `<button class="btn btn-primary btn-sm" onclick="onMoveComplete(this)">Move to Complete</button> <button class="btn btn-danger btn-sm" onclick="onMoveClear(this)">Move to Clear</button>`;
  }
}

function onMoveComplete(table) {
  let confirmComplete = confirm("Are you confirm to move Todo to complete ?");
  if (confirmComplete) {
    // location.reload();
    var selectedRow = table.parentElement.parentElement;

    var updateInput = {
      serialNo: selectedRow.cells[0].innerHTML,
      taskName: selectedRow.cells[1].innerHTML,
      progress: selectedRow.cells[2].innerHTML,
    };

    // var dataPresent = JSON.parse(window.localStorage.getItem("localData"));
    newArray = newArray.map((item) => {
      if (item.serialNo === updateInput.serialNo) {
        item.progress = "complete";
      }
      return item;
    });
    localStorage.setItem("localData", JSON.stringify(newArray));
    var row = table.parentElement.parentElement;
    console.log(row);
    document.getElementById("storeList1").deleteRow(row.rowIndex);
  }
}

function onMoveClear(table) {
  let confirmClear = confirm("Are you confirm to move Todo to clear ?");

  if (confirmClear) {
    // location.reload();
    var selectedRow = table.parentElement.parentElement;

    var updateInput = {
      serialNo: selectedRow.cells[0].innerHTML,
      taskName: selectedRow.cells[1].innerHTML,
      progress: selectedRow.cells[2].innerHTML,
    };

    // var dataPresent = JSON.parse(window.localStorage.getItem("localData"));
    newArray = newArray.map((item) => {
      if (item.serialNo === updateInput.serialNo) {
        item.progress = "clear";
      }
      return item;
    });
    localStorage.setItem("localData", JSON.stringify(newArray));
    var row = table.parentElement.parentElement;
    //console.log(row);
    document.getElementById("storeList1").deleteRow(row.rowIndex);
  }
}
