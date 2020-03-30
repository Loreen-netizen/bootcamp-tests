describe("allFromTown", function(){
    it ("should return 2 licence plates from Midrand", function(){
        assert.deepEqual( ["NW 5867 0", "NW 456 098"],allFromTown("CY 123-798 , NW 5867 0, CL 567 897, NW 456 098","NW"));
    });
    it ("should return 1 licence plate from Paarl", function(){
        assert.deepEqual( ["CY 123-798"],allFromTown("CY 123-798 , CA 5867 0, CL 567 897, CA 456 098","CY"));
    });
    it ("should return 2 licence plates from Cape Town", function(){
        assert.deepEqual( ["CA 5867 0", "CA 456 098"],allFromTown("CY 123-798 , CA 5867 0, CL 567 897, CA 456 098","CA"));
    });
});