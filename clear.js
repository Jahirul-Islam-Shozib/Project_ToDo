var dataFormStorage = JSON.parse(window.localStorage.getItem("localData"));
console.log(dataFormStorage);
var dataForClear = JSON.parse(window.localStorage.getItem("clearData"));
console.log(dataForClear);
// if (dataFormStorage != null) {
//   debugger;
//   for (let i = 0; i < dataFormStorage.length; i++) {
//     if (dataFormStorage[i].progress === "clear") {
//       var table = document
//         .getElementById("storeList3")
//         .getElementsByTagName("tbody")[0];
//       var row = table.insertRow(table.length);
//       var cell1 = row.insertCell(0);
//       cell1.innerHTML = dataFormStorage[i].name;
//       var cell2 = row.insertCell(1);
//       cell2.innerHTML = dataFormStorage[i].progress;
//       var cell3 = row.insertCell(2);
//       cell3.innerHTML = `<button class="btn btn-outline-success btn-sm" onclick="onRemove(this)">Remove</button>`;
//     }
//   }
// } else if (dataForClear != null) {
//   debugger;
for (let j = 0; j < dataForClear.length; j++) {
  var table = document
    .getElementById("storeList3")
    .getElementsByTagName("tbody")[0];
  var row = table.insertRow(table.length);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = dataForClear[j];
  var cell2 = row.insertCell(1);
  cell2.innerHTML = `Clear`;
  var cell3 = row.insertCell(2);
  cell3.innerHTML = `<button class="btn btn-outline-success btn-sm" onclick="onRemove(this)">Remove</button>`;
}
//}
