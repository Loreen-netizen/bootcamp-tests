describe("isWeekday", function(){
    it ("should return false for Saturday",function(){
        assert.equal(false,isWeekday("Saturday"));
    });
    it ("should return true for Monday",function(){
        assert.equal(true,isWeekday("Monday"));
    });
     it ("should return true for Thursday",function(){
        assert.equal(true,isWeekday("Thursday"));
    });
});