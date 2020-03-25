describe("mostProfitableDepartment",function(){
    it ("should say which department makes the most money", function(){
        assert.deepEqual("hardware", mostProfitableDepartment( [{department: 'hardware', sales: 4500, day: 'Monday'},
        {department: 'outdoor', sales: 1500, day: 'Monday'},
        {department: 'carpentry', sales: 5500, day: 'Monday'},
        {department: 'hardware', sales: 7500, day: 'Tuesday'}]));
    });
});