describe("regCheck",function(){
    it ("should return true if Licence plate is from Gauteng Province", function(){
        assert.equal(true, regCheck( "GP 123-456", "GP"));
    });
    it ("should return true if Licence plate is from Limpopo Province", function(){
        assert.equal(true, regCheck( "L 123-456", "L"));
    });
    it ("should return true if Licence plate is from Eastern Cape", function(){
        assert.equal(true, regCheck( "EC 123-456", "EC"));
    });
    it ("should return true if Licence plate is from Mpumalanga Province", function(){
        assert.equal(true, regCheck( "MP 123-456", "MP"));
    });
});