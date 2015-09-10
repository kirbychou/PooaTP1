var Contact = Contact || {};
Contact = (function (self) {
    "use strict";
    self.Gender = {MR: 1, MS: 2};
    self.MailCategory = {PERSO: 1, PRO: 2};
    self.Contact = function (value, value1, value2) {
        var nom, prenom, genre, id, mail, phone;
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
        }
        this.add_mail = function (v) {
            mail.push(v);
        };
        this.add_phone = function (tel) {
            phone.push(tel);
        };
        var init = function (value, value1, value2) {
            nom = value2;
            prenom = value1;
            genre = value;
            mail = new Array(0);
            phone = new Array(0);
            id = 'xxxx - xxxx - xxxx - xxxx - xxxx'.replace(/ x /g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };

        init(value, value1, value2);
    };
    return self;
}(Contact || {}));