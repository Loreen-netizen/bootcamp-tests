var allPaarl = function(listOfRegNumbers){
    console.log(listOfRegNumbers);
   var paarl = [];
   var list = listOfRegNumbers.split(", ");
  // console.log(list);
   for(var i = 0 ; i < list.length; i++ ){
 //  console.log(list[i]);
   if(list[i].startsWith("CJ")){
     paarl.push(list[i])
   }
   }
   return paarl;
 }