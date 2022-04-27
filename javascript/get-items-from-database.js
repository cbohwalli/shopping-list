import addEventListenerCheckboxes from "./add-event-listener-checkboxes.js";
import addEventListenerRemoveButtons from "./add-event-listener-remove-buttons.js";
import getItemsId from "./get-items-id.js";

function getItemsFromDatabase() {

  const ids = getItemsId();
  const idsStringFormat = JSON.stringify(ids);
  const xhr = new XMLHttpRequest();

  try {

    xhr.onload = function() {

      if (document.getElementById('itemsDiv').innerHTML !== this.responseText) {

        document.getElementById('itemsDiv').innerHTML = this.responseText;

        if (this.responseText != "") {
          addEventListenerCheckboxes();
          addEventListenerRemoveButtons();
        }
      } 

      getItemsFromDatabase();
    }
  } catch (e) {
    alert(e);
  }

  xhr.open("POST", "include/check-for-data.php", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(idsStringFormat);
}

export default getItemsFromDatabase;