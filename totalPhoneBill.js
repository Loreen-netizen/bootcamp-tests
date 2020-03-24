var totalPhoneBill = function(allCallsAndTexts){
    var allCallsAndTextsArray = allCallsAndTexts.split(",");
    //console.log(allCallsAndTexts);
    
    var totalForCalls = 0 ;
    var totalForTexts = 0;
    var totalBill = 0;
    for( let i = 0 ; i < allCallsAndTextsArray.length ; i++){
    var finalCallsAndTexts = allCallsAndTextsArray[i].trim();
    if(finalCallsAndTexts=== "call"){
    totalForCalls += 2.75 }else if(finalCallsAndTexts=== "sms"){
    totalForTexts += 0.65};
    totalBill = totalForCalls + totalForTexts;
    console.log( totalBill);
  };
    return "R" + totalBill.toFixed(2) ;
    };
  