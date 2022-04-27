function getItemsId() {

    const items = document.getElementsByClassName('itemContainer');
    const checkboxes = document.getElementsByClassName('checkbox');
    let itemDataArray = new Array();
  
    for(var i = 0; i < items.length; i++) {
  
      const itemId = items[i].id;
      const itemIdFormated = itemId.substring(itemId.indexOf(":") + 1);
      let checked = null;
  
      if (checkboxes[i].checked) {
        checked = "1";
      } 
  
      var itemdata = {id: itemIdFormated, check: checked};
      itemDataArray.push(itemdata);
    }
  
    return itemDataArray;
  }

  export default getItemsId;