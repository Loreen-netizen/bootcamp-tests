

describe("countRegNumber ", function(){
    it ("should return 2 for string with 2 license plates", function(){
        assert.equal(2,countRegNumber("CY 123-456,CA 324-567"));
    });
    it ("should return 4 for string with 4 license plates", function(){
        assert.equal(4,countRegNumber("CY 123-456,CA 324-567,CY 123-456,CA 324-567"));
    });
    it ("should return 5 for string with 5 license plates", function(){
        assert.equal(5,countRegNumber("CY 123-456,CA 324-567,CY 123-456,CA 324-567,CU 238-596"));
    });
});