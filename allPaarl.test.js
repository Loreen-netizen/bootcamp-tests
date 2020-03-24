
        describe("allPaarl", function(){
        it ("Return licence plates from Paarl", function(){
            assert.deepEqual (["CJ 345", "CJ 3456", "CJ 909"], allPaarl("CJ 345, CA 345, CJ 3456, CV 567, CJ 909"));  
    });
});
