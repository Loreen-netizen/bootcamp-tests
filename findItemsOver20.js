var findItemsOver20 = function(objectListArray){
    var listItemsOver20 = [];
    console.log(objectListArray);
    for( let i =  0 ; i < objectListArray.length ; i++) {
      var listItemName = objectListArray[i];
      var listItemQuantity = objectListArray[i].qty;
    if(listItemQuantity > 20){
    listItemsOver20.push(listItemName)};
    }
    return listItemsOver20;
  };
  