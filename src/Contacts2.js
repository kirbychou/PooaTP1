var Contact = Contact || {};
Contact = (function (self) {
    "use strict";
    self.Contacts2 = function () {
        var l = [];

        this.clear = function () {
            l = [];
        };

        this.list = function () {
            return l;
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


        this.search = function (strategie) {
            return strategie.search(l);
        };

        this.change = function (changement) {
            return changement.change(l);
        };

        this.get = function (id) {

            for (var iter = 0; iter < l.length; iter++) {
                if (l[iter].id() === id) {

                    return l[iter];
                }
            }
        };

        this.contientTag = function(tag){
            for(var i=0; i< l.length; i++){
                if(l[i].tag() === tag){
                    return true;
                }
            }
            return false;
        };



        this.getFromName = function (firstName, lastName) {
            var foo = [];
            for (var iter = 0; iter < l.length; iter++) {
                if (l[iter].firstName() === firstName && l[iter].lastName() === lastName) {
                    foo.push(l[iter]);
                }
            }
            if (foo.length > 1) {
                return foo;
            } else if (foo.length === 0) {
                return null;
            } else {
                return foo[0];
            }

        };
    };

    return self;
}(Contact || {}));


