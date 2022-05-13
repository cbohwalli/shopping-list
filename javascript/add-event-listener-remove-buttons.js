function addEventListenerRemoveButtons() {

    const buttons = document.querySelectorAll('.itemContainer__button');
  
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        removeItem(e);
      });  
    });  
  }
  
  function removeItem(e) {
  
    e.preventDefault();
  
    var xhr = new XMLHttpRequest();
    var itemId = e.target.id;
    var itemIdformated = itemId.substring(itemId.indexOf(":") + 1);
  
    xhr.onload = function(){
        const item = document.getElementById(itemId);
        item.remove();
    }
  
    xhr.open('POST', 'include/remove.php');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("vara=" + itemIdformated);
  }

  export default addEventListenerRemoveButtons;