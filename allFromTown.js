function allFromTown (regNumber,numberStartString){
    var allRegistrationNumbers = regNumber.split(',');
   var seperatedNumbers = [];
    for( let i = 0 ; i < allRegistrationNumbers.length ; i++) {
    if(allRegistrationNumbers[i].trim().startsWith(numberStartString)){
      var name = allRegistrationNumbers[i].trim();
      console.log(name);
    seperatedNumbers.push(name)
    } 
  }
  return seperatedNumbers;
  };
  