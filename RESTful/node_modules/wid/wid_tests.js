var _ = require('lodash');

module.exports = {
    setUp: function (callback) {
        this.wid = require('./wid');
        callback();
    },
    tearDown: function (callback) {
        callback();
    },
    AskForEightCharacterLength: function (test) {
        test.ok(this.wid.NewWID(8).length == 8, "This should be 8");
        test.done();
    },
    TestDifferentLengths: function (test) {
        for (var i = 0; i < 50; i++) {
            var stamp = new Date().getTime();
            var w = this.wid.NewWID(i);
            console.log("WID: " + w + " (" + (new Date().getTime() - stamp) + ")");
        }
        test.done();
    }
    ,
    RunUntilDupe: function (test) {
        for (var i = 0; i < 10; i++) {
            var list = [];
            var stamp = new Date().getTime();
            while(true){
                var w = this.wid.NewWID(i);
                if(_.contains(list, w))
                {
                    console.log("WID: " + w + " is a dupe after (" + (new Date().getTime() - stamp) + ")ms after "+list.length+" words");
                    break;
                }
                list.push(w);
            }
        }
        test.done();
    }
//    ,
//    Randomer:function(test){
//        var seed = 1;
//        function random() {
//            var x = Math.sin(seed++) * 10000;
//            return ((x- Math.floor(x)) + Math.random())/2 ;
//        }
//        for(var i = 0; i<100;i++)
//        {
//            console.log(random());
//        }
//
//        test.done();
//    }
};

