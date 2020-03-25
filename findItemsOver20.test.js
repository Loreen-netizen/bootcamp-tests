describe("findItemsOver20", function(){
    it ("should return all items with quantity higher than 20", function (){
        assert.deepEqual([{"name":"pears","qty":37}] ,findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":37}]));
    });
});