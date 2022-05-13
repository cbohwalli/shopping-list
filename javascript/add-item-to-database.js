function addEventListenerAddButton() {
  document.getElementById('form').addEventListener("submit", (e) => {
    addItemToDatabase(e);
  });
}

function addItemToDatabase(e) {

  e.preventDefault();

  var xhr = new XMLHttpRequest();
  var newItem = document.getElementById('inputField').value;

  document.getElementById('inputField').value = "";

  xhr.onload = function() {}
  xhr.open('POST', 'include/insert.php');
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("newItem=" + newItem);
}

export default addEventListenerAddButton;