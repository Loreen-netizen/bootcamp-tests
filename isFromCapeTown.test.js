describe("isFromCapeTown", function(){

    it ("should say if car licence plate is from Cape Town", function(){
        assert.equal(true,isFromCapeTown("CA 345-798"));
    });
});