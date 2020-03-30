describe("countAllFromTown", function(){
    it ("should return 2 for string with 2 license plates from Cape Province", function(){
        assert.deepEqual ( 2, countAllFromTown('CJ 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
    it ("should return 1 for string with 1 license plate from Gauteng Province", function(){
        assert.deepEqual ( 1, countAllFromTown('GP 124,CY 567,CL 345, CJ 456,CL 341','GP'));
    });
    it ("should return 2 for string with 2 license plates from Eastern Cape", function(){
        assert.deepEqual ( 2, countAllFromTown('EC 124,CY 567,CL 345, EC 456,CL 341','EC'));
    });
});