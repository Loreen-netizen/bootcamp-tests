describe ("totalPhoneBill", function(){
    it ("should tell you how much you owe for calls and texts", function(){
    assert.equal( "R6.80",totalPhoneBill( "call, sms, call, sms"));
    });
});