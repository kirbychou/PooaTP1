var Contact = Contact || {};
Contact = (function (self) {
    "use strict";
    self.Gender = {MR: 1, MS: 2};
    self.PhoneCategory = {PERSO: 1, PRO: 2, PHONE: 3};
    self.PhoneType = {MOBILE: 1, FIXE: 2};
    self.Phone = function (value, value1, value2) {
        var numero, categorie, type;
        this.number = function () {
            return numero;
        };
        this.category = function () {
            return categorie;
        };
        this.type = function () {
            return type;
        };
        var init = function (value, value1, value2) {
            numero = value;
            categorie = value1;
            type = value2;
        };

        init(value, value1, value2);
    };
    return self;
}(Contact || {}));