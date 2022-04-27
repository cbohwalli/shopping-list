function addEventListenerCheckboxes() {

    var checkboxes = document.getElementsByClassName('checkbox');
  
    for(let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener("click", function() {
        updateCheckedInDatabase(this);
      });
    }
  }
  
  function updateCheckedInDatabase(item) {
  
    let itemChecked = 0;
    const itemId = item.id.substring(item.id.indexOf(':') + 1);
    const xhr = new XMLHttpRequest();
  
    if(item.checked) {
      itemChecked = 1;
    }
  
    xhr.open("POST", "include/functions-php.php");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("checked="+ itemChecked + "&id=" + itemId);
  }

  export default addEventListenerCheckboxes;