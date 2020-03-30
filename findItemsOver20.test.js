describe("findItemsOver20", function(){
    it ("should return pears", function (){
        assert.deepEqual([{"name":"pears","qty":37}] ,findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":37}]));
    });
    it ("should return peaches", function (){
        assert.deepEqual([{"name":"peaches","qty":37}] ,findItemsOver20([{"name":"apples","qty":10},{"name":"peaches","qty":37}]));
    });
    it ("should return kiwis", function (){
        assert.deepEqual([{"name":"kiwis","qty":37}] ,findItemsOver20([{"name":"apples","qty":10},{"name":"kiwis","qty":37}]));
    });
});