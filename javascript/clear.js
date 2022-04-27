function addEventListenerClearButton() {
  document.getElementById('clearButton').addEventListener("click", (e) => {
    deleteAllItemsFromDatabase(e);
  });
}

function deleteAllItemsFromDatabase(e) {

  e.preventDefault();

  var xhr = new XMLHttpRequest();

  xhr.onload = function(){
    document.getElementById('itemsDiv').innerHTML = "";
  }
  xhr.open('GET', 'include/delete-all.php');
  xhr.send();
}

export default addEventListenerClearButton;