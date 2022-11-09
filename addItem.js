var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var mainArray = [];
// var selectedRow = null;

var previousData = JSON.parse(window.localStorage.getItem("localData"));
if (previousData) {
  mainArray = previousData;
}

function displayDetails() {
  getAllTask();

  // var valid = validateForm();
  // if (valid == true) {

  // }
  event.preventDefault();

  var inputData = {
    serialNo: document.getElementById("todoId").value,
    taskName: document.getElementById("todoInput").value,
    date: document.getElementById("todoDate").value,
    shift: document.getElementById("inputShiftSelect").value,
    time: document.getElementById("todoTime").value,
    progress: document.getElementById("inputGroupSelect01").value,
  };

  //mainArray.push(inputData);
  //console.log(mainArray);
  fetch("http://localhost:8080/task", {
    method: "post",
    body: inputData,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      if (res.status === 201) {
        console.log("Post successfully created!");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  //localStorage.setItem("localData", JSON.stringify(mainArray));
  reset();
}

function reset() {
  document.getElementById("todoId").value = "";
  document.getElementById("todoInput").value = "";
  (document.getElementById("todoDate").value = ""),
    (document.getElementById("inputShiftSelect").value = ""),
    (document.getElementById("todoTime").value = ""),
    (document.getElementById("inputGroupSelect01").value = "");
}

function getAllTask() {
  // var xhr = new XMLHttpRequest();

  // var url = "http://localhost:8080/task-list";
  // xhr.open("GET", url, true);

  // xhr.onreadystatechange = function () {
  //   if (this.readyState == 4 && this.status == 200) {
  //     console.log(this.response);
  //   }
  // };

  // xhr.send();

  fetch("http://localhost:8080/task-list")
    .then((response) => response.json())
    .then((data) => console.log("localhost:8080:: ", data));
}

// function setError(id, error) {
//   var element = document.getElementById(id);
//   element.getElementsByClassName("formError")[0].innerHTML = error;
// }

// function validateForm() {
//   var retrurnVal = true;
//   var name = document.forms["form"]["todoInput"].value;
//   if (name.length < 5 || name === null) {
//     setError("name", "Please Select a valid name!");
//     retrurnVal = false;
//   }
//   return retrurnVal;
// }
