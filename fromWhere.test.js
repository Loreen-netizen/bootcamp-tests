describe("fromWhere", function(){
    it ("should take in a license plate as a parameter and tell you which town that car is from",function(){
        assert.equal("Bellville", fromWhere( "CY"));
        assert.equal("Paarl", fromWhere("CJ"));
        assert.equal("Cape Town", fromWhere("CA"));
        assert.equal("Some other place!", fromWhere("CT"));
    });
});