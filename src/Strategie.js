/**
 * Created by lcarpent on 11/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    "use strict";
    self.FromNameSearchStrategy = function (firstName, lastName) {
        this.search = function (contact) {
            for (var iter = 0; iter < contact.length; iter++) {
                if (contact[iter].firstName() === firstName && contact[iter].lastName() === lastName) {
                    return contact[iter];
                }
            }

        };
    };

    self.FromMailSearchStrategy = function (email) {
        this.search = function (contact) {

            for (var iter = 0; iter < contact.length; iter++) {
                if (contact[iter].mails() === email) {
                    return contact[iter];
                }
            }

        };
    };
    return self;
}(Contact || {}));