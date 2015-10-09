var Contact = Contact || {};
Contact = (function (self) {
    "use strict";
    self.Gender = {MR: 1, MS: 2};
    self.MailCategory = {PERSO: 1, PRO: 2};

    self.Contact = function (value, value1, value2) {
        var nom, prenom, genre, mail, phone, numid;

        this.toObject = function () {
            return {
                "FirstName": prenom,
                "lastName": nom
            };
        };
        this.gender = function () {
            return genre;
        };
        this.firstName = function () {
            return prenom;
        };

        this.lastName = function () {
            return nom;
        };
        this.mails = function () {
            return mail;
        };
        this.phones = function () {
            return phone;
        };


        this.add_mail = function (v) {
            mail.push(v);
        };
        this.add_phone = function (tel) {
            phone.push(tel);
        };
        this.addPhone = function (tel) {
            phone.push(tel);
        };
        this.setID = function (id) {
            numid = id;
        };
        this.removePhone = function (tel) {
            for (var iter = 0; iter < phone.length; iter++) {
                if (phone[iter] === tel) {
                    phone[iter].pop();
                }
            }
        };

        this.id = function () {
            return numid;
        };

        var id = function () {
            return 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/x/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });

        };

        var init = function (value, value1, value2) {
            nom = value2;
            prenom = value1;
            genre = value;
            mail = [];
            phone = [];
            numid = id();
            // console.log(numid);
        };

        this.changePhone = function (numero, newnumero) {
            for (var iter = 0; iter < phone.length; iter++) {
                if (phone[iter].number() === numero) {
                    phone[iter] = new Contact.Phone(newnumero, phone[iter].type(), phone[iter].category());
                }
            }

            for (var i = 0; i < observeur.length; i++) {
                observeur[i].notified(this);
            }
        };
        var observeur = [];
        this.register = function (proxy) {
            observeur.push(proxy);
        };

        var tag;

        this.addTag = function (tag_) {
            tag = tag_;
        };
        this.tag = function () {
            return tag;
        };
        init(value, value1, value2);
    };
    return self;
}(Contact || {}));