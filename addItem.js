var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var pendingCon = document.querySelector("#storeList1");
var completeCon = document.querySelector("#storeList2");
var clearCon = document.querySelector("#storeList3");
var addCon = document.querySelector("form");
var mainArray = [];
var selectedRow = null;
function openPending() {
  pendingCon.classList.remove("hidden");
  addCon.classList.add("hidden");
}
function openComplete() {
  completeCon.classList.remove("hidden");
  addCon.classList.add("hidden");
}
function openClear() {
  clearCon.classList.remove("hidden");
  addCon.classList.add("hidden");
}

var previousData = JSON.parse(window.localStorage.getItem("localData"));
if (previousData) {
  mainArray = previousData;
}

function displayDetails() {
  event.preventDefault();
  var inputData = {
    name: document.getElementById("todoInput").value,
    progress: document.getElementById("inputGroupSelect01").value,
  };
  mainArray.push(inputData);
  localStorage.setItem("localData", JSON.stringify(mainArray));
  // if (inputData.progress === "pending") {
  //   localStorage.setItem("pendingData", JSON.stringify(mainArray));
  // } else if (inputData.progress === "complete") {
  //   localStorage.setItem("completeData", JSON.stringify(mainArray));
  // }

  // console.log(mainArray);

  // var name = document.getElementById("todoInput").value;
  // var progress = document.getElementById("inputGroupSelect01").value;

  // if (!name || !progress) {
  //   alert("Please fill all the boxes");
  //   return;
  // } else if (progress === "pending") {
  //   openPending();
  //   var table = document
  //     .getElementById("storeList1")
  //     .getElementsByTagName("tbody")[0];
  //   var row = table.insertRow(table.length);
  //   var cell1 = row.insertCell(0);
  //   cell1.innerHTML = name;
  //   var cell2 = row.insertCell(1);
  //   cell2.innerHTML = `<button class="btn btn-primary btn-sm" type="button" disabled>
  //   <span
  //     class="spinner-border spinner-border-sm"
  //     role="status"
  //     aria-hidden="true"
  //   ></span>
  //   pending
  // </button>`;
  //   var cell3 = row.insertCell(2);
  //   cell3.innerHTML = `<button class="btn btn-outline-info btn-sm" onclick="onMoveComplete(this)">Move to Complete</button><button class="btn btn-outline-success btn-sm" onclick="onMoveClear(this)">Move to Clear</button><button type="button" class="btn btn-outline-info btn-sm onclick=""">
  //   Return
  // </button>`;
  //   // row++;
  // } else if (progress === "complete") {
  //   openComplete();
  //   var table = document
  //     .getElementById("storeList2")
  //     .getElementsByTagName("tbody")[0];
  //   var row = table.insertRow(table.length);
  //   var cell1 = row.insertCell(0);
  //   cell1.innerHTML = name;
  //   var cell2 = row.insertCell(1);
  //   cell2.innerHTML = `<input
  //   class="form-check-input"
  //   type="checkbox"
  //   value=""
  //   id="flexCheckChecked"
  //   checked
  // />
  // <label class="form-check-label" for="flexCheckChecked">
  //   Completed
  // </label>`;
  //   var cell3 = row.insertCell(2);
  //   cell3.innerHTML = `<button class="btn btn-outline-success btn-sm" onclick="onMoveClear(this)">Move to Clear</button>`;
  // } else if (progress === "clear") {
  //   openClear();
  //   var table = document
  //     .getElementById("storeList3")
  //     .getElementsByTagName("tbody")[0];
  //   var row = table.insertRow(table.length);
  //   var cell1 = row.insertCell(0);
  //   cell1.innerHTML = name;
  //   var cell2 = row.insertCell(1);
  //   cell2.innerHTML = progress;
  //   var cell3 = row.insertCell(2);
  //   cell3.innerHTML = `<button class="btn btn-outline-success btn-sm" onclick="onRemove(this)">Remove</button>`;
  // }
}
