var dataFormStorage = JSON.parse(window.localStorage.getItem("localData"));
console.log(dataFormStorage);

for (let i = 0; i < dataFormStorage.length; i++) {
  if (dataFormStorage[i].progress === "complete") {
    var table = document
      .getElementById("storeList2")
      .getElementsByTagName("tbody")[0];
    var row = table.insertRow(table.length);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = dataFormStorage[i].name;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = `<input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckChecked"
        checked
      />
      <label class="form-check-label" for="flexCheckChecked">
        Completed
      </label>`;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = `<button class="btn btn-outline-danger btn-sm" onclick="onMoveClear(this)">Move to Clear</button>`;
  }
}
