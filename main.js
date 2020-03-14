let userName = localStorage.getItem("receivedName");

const openSettings = () => {
  document.getElementById("settings").classList.toggle("settings-open");
  clearName();
};

let saveName = () => {
  localStorage.setItem("receivedName", this.userName);

  if (userName == null) {
    userName = "buddy";
  }
};

let changeName = () => {
  if ((userName = document.getElementById("name-input").value == "")) {
    userName = "buddy";
  } else {
    userName = document.getElementById("name-input").value;
  }

  saveName();
  getGreeting();
};

const getGreeting = () => {
  document.getElementById("greeting").innerHTML = `Hello ${userName},
  make it works!`;
};

const clearName = () => {
  document.getElementById("name-input").value = "";
};

document
  .getElementById("settings-button")
  .addEventListener("click", openSettings);

document.getElementById("name-form").addEventListener("submit", function(e) {
  e.preventDefault();

  changeName();
  clearName();
});
