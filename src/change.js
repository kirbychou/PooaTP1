/**
 * Created by lcarpent on 18/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    "use strict";
    self.ChangePhoneStrategy = function (prenom, nom, numero, newnumero) {
                this.change = function(liste){
                    var contact = new Contact.FromPhoneSearchStrategy(numero).search(liste);
                    contact.changePhone(numero, newnumero);

                };
    };
    return self;
}(Contact || {}));