var compArr = [];
var dataFormStorage = JSON.parse(window.localStorage.getItem("localData"));
if (dataFormStorage) {
  compArr = dataFormStorage;
}

function warningWindow() {
  var table = document.getElementById("storeList2");
  var warningMsg = document.getElementById("warning");
  table.classList.remove("hidden");
  warningMsg.classList.add("hidden");
}

for (let i = 0; i < dataFormStorage.length; i++) {
  if (dataFormStorage[i].progress === "complete") {
    warningWindow();
    var table = document
      .getElementById("storeList2")
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
    // `<input
    //     class="form-check-input"
    //     type="checkbox"
    //     value=""
    //     id="flexCheckChecked"
    //     checked
    //   />
    //   <label class="form-check-label" for="flexCheckChecked">
    //     Completed
    //   </label>`;
    var cell7 = row.insertCell(6);
    cell7.innerHTML = `<button class="btn btn-danger btn-sm" onclick="onMoveClear(this)">Move to Clear</button>`;
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
    compArr = compArr.map((item) => {
      if (item.serialNo === updateInput.serialNo) {
        item.progress = "clear";
      }
      return item;
    });
    localStorage.setItem("localData", JSON.stringify(compArr));
    var row = table.parentElement.parentElement;
    console.log(row);
    document.getElementById("storeList2").deleteRow(row.rowIndex);
  }
}
