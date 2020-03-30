describe("findItemsOver",function(){
    it ("should return apples and bananas",function(){
        assert.deepEqual([{"name":"apples","qty":40},{"name":"bananas","qty":50}], findItemsOver([{"name":"apples","qty":40},{"name":"bananas","qty":50}, {"name":"oranges","qty":10},{"name":"kiwis","qty":13}],39));
    });
    it ("should return apples",function(){
        assert.deepEqual([{"name":"apples","qty":40}], findItemsOver([{"name":"apples","qty":40},{"name":"bananas","qty":10}, {"name":"oranges","qty":10},{"name":"kiwis","qty":13}],39));
    });
    it ("should return bananas",function(){
        assert.deepEqual([{"name":"bananas","qty":50}], findItemsOver([{"name":"apples","qty":10},{"name":"bananas","qty":50}, {"name":"oranges","qty":10},{"name":"kiwis","qty":13}],39));
    });
});