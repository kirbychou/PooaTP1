var Contact = Contact || {};
Contact = (function (self) {
    "use strict";

    var List = function () {
        var l = [];

        this.clear = function () {
            l = [];
        };

        this.size = function () {
            return l.length;
        };

        this.add = function (value) {
            l.push(value);
        };
        this.remove = function (id) {
            for (var iter = 0; iter < l.length; iter++) {
                if (l[iter].id() === id) {
                    l.splice(iter, 1);
                }
            }
        };

        this.get = function (id) {
            for (var iter = 0; iter < l.length; iter++) {
                if (l[iter].id() === id) {
                    return l[iter];
                }
            }

        };


        this.getFromName = function (firstName, lastName) {
            var foo=[];
            for (var iter = 0; iter < l.length; iter++) {
                if (l[iter].firstName() === firstName && l[iter].lastName() === lastName ) {
                    foo.push(l[iter]);
                }
            }
            if(foo.length > 1){
                return foo;
            }else if(foo.length === 0){
                return null;
            }else{
                return foo[0];
            }

        };
    };

    var liste = null;

    self.Contacts = {
        instance: function () {
            if (!liste) {
                liste = new List();
            }
            return liste;
        }
    };

    return self;
}(Contact || {}));


