
        describe("allPaarl", function(){
        it ("should return 3 licence plates from Paarl", function(){
            assert.deepEqual (["CJ 345", "CJ 3456", "CJ 909"], allPaarl("CJ 345, CA 345, CJ 3456, CV 567, CJ 909"));  
    });
    it ("should return 2 licence plates from Paarl", function(){
        assert.deepEqual (["CJ 345", "CJ 3456"], allPaarl("CJ 345, CA 345, CJ 3456, CP 567, CY 919,CM 467, CY 609"));  
});
it ("should return 1 licence plates from Paarl", function(){
    assert.deepEqual (["CJ 345"], allPaarl("CJ 345, CA 345, CY 3456, CV 567, CA 909"));  
});
});
