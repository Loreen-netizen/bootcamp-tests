describe("fromWhere", function(){
    it ("should say license plate is from Bellville",function(){
        assert.equal("Bellville", fromWhere( "CY"));
    });
        it ("should say license plate is from Paarl",function(){
        assert.equal("Paarl", fromWhere("CJ"));
    });
        it ("should say license plate is from Cape Town",function(){
        assert.equal("Cape Town", fromWhere("CA"));
    });
        it ("should say license plate is from Other Place",function(){
        assert.equal("Some other place!", fromWhere("CT"));
    });
});