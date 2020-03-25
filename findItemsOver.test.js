describe("findItemsOver",function(){
    it ("should return all items over threshold",function(){
        assert.deepEqual([{"name":"apples","qty":40},{"name":"bananas","qty":50}], findItemsOver([{"name":"apples","qty":40},{"name":"bananas","qty":50}, {"name":"oranges","qty":10},{"name":"kiwis","qty":13}],39));
    });
});