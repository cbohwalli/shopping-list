import addEventListenerAddButton from "./add-item-to-database.js";
import addEventListenerClearButton from "./clear.js";
import getItemsFromDatabase from "./get-items-from-database.js";

function startSite() {
    getItemsFromDatabase();
    addEventListenerAddButton();
    addEventListenerClearButton();    
}

startSite();