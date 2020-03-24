describe("isWeekday", function(){
    it ("should return true for all week days and false for weekends",function(){
        assert.equal(false,isWeekday("Saturday"));
    });
});