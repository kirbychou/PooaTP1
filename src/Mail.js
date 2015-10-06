var Contact = Contact || {};
Contact = (function (self) {
    "use strict";
    self.Gender = {MR: 1, MS: 2};
    self.MailCategory = {PERSO: 1, PRO: 2};
    self.Mail = function (value, value1) {
        var adresse, categorie;
        this.address = function () {
            return adresse;
        };
        this.category = function () {
            return categorie;
        };
        var init = function (value, value1) {
            adresse = value;
            categorie = value1;
        };

        init(value, value1);
    };
    return self;
}(Contact || {}));