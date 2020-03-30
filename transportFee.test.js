describe("transportFee", function(){
    it("should return amount due for morning shift", function(){
        assert.equal("R20", transportFee("morning"));
    });
        it("should return amount due for afternoon shift", function(){
        assert.equal("R10",transportFee("afternoon"));
    });
        it("should return amount due for any other shift", function(){
        assert.equal("free",transportFee("else"));
        
    });
});