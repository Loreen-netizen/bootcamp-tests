describe("mostProfitableDepartment",function(){
    it ("should return hardware", function(){
        assert.deepEqual("hardware", mostProfitableDepartment( [{department: 'hardware', sales: 4500, day: 'Monday'},
        {department: 'outdoor', sales: 1500, day: 'Monday'},
        {department: 'carpentry', sales: 5500, day: 'Monday'},
        {department: 'hardware', sales: 7500, day: 'Tuesday'}]));
    });
    it ("should return outdoor", function(){
        assert.deepEqual("outdoor", mostProfitableDepartment( [{department: 'hardware', sales: 4500, day: 'Monday'},
        {department: 'outdoor', sales: 1500, day: 'Monday'},
        {department: 'carpentry', sales: 5500, day: 'Monday'},
        {department: 'outdoor', sales: 7500, day: 'Tuesday'}]));
    });
    it ("should return carpentry", function(){
        assert.deepEqual("carpentry", mostProfitableDepartment( [{department: 'hardware', sales: 4500, day: 'Monday'},
        {department: 'outdoor', sales: 1500, day: 'Monday'},
        {department: 'carpentry', sales: 5500, day: 'Monday'},
        {department: 'carpentry', sales: 7500, day: 'Tuesday'}]));
    });
});