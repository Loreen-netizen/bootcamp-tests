

describe("countRegNumber ", function(){
    it ("should return number of licence plates in a string", function(){
        assert.equal(2,countRegNumber("CY 123-456,CA 324-567"));
    });
});