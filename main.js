function openSettings() {
  document.getElementById("settings").classList.toggle("settings-open");
  document.getElementById("settings-button").addEventListener('click', openSettings)
};

var userName;
function saveName() {
  localStorage.setItem('receivedName', userName);
}
