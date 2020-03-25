describe("transportFee", function(){
    it("should return amount due for transport depending on shift worked", function(){
        assert.equal("R20", transportFee("morning"));
        assert.equal("R10",transportFee("afternoon"));
        assert.equal("free",transportFee("else"));
    });
});