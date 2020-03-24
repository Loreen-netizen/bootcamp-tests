describe("allFromTown", function(){
    it ("should return all licence plates from that town", function(){
        assert.deepEqual( ["CA 5867 0", "CA 456 098"],allFromTown("CY 123-798 , CA 5867 0, CL 567 897, CA 456 098","CA"));
    });
});