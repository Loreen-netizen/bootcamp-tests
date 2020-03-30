describe ("isFromBelllville" , function(){
it ("should return true if license plate is from Bellville", function(){
    assert.equal (true,isFromBellville("CY123-345"));
});
it ("should return false if license plate is not from Bellville", function(){
    assert.equal (false,isFromBellville("CJ123-345"));
});
it ("should return false if license plate is entered wrong", function(){
    assert.equal (false,isFromBellville("123-345CY"));
});

});


