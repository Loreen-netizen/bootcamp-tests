describe ("totalPhoneBill", function(){
    it ("should tell you how much you owe for 2 calls and 2 texts", function(){
    assert.equal( "R6.80",totalPhoneBill( "call, sms, call, sms"));
    });
    it ("should tell you how much you owe for 3 calls and 5 texts", function(){
        assert.equal( "R11.50",totalPhoneBill( "call,call, sms, call, sms, sms, sms, sms"));
        });
        it ("should tell you how much you owe for 1 call and 1 text", function(){
            assert.equal( "R3.40",totalPhoneBill( "call, sms"));
            });
});