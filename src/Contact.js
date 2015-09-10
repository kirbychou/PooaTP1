var Contact = Contact || {};
Contact = (function (self) {
    "use strict";
    self.Gender = {MR: 1, MS: 2};
    self.MailCategory = {PERSO: 1, PRO: 2};
    self.Contact = function (value, value1, value2) {
        var nom, prenom, genre;
        this.gender = function () {
            return genre;
        };
        this.firstName = function () {
            return prenom;
        };

        this.lastName = function () {
            return nom;
        };
        var init = function (value, value1, value2) {
            nom = value2;
            prenom = value1;
            genre = value;
        };

        init(value, value1, value2);
    };
    return self;
}(Contact || {}));