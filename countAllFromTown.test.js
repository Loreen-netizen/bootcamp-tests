describe("countAllFromTown", function(){
    it ("should take a string of licence numbers and return total licence numbers from a specific town", function(){
        assert.deepEqual ( 2, countAllFromTown('CJ 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
});