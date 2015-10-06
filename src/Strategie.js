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
                for (var it = 0; it < contact[iter].mails().length; it++) {
                    if (contact[iter].mails()[it].address() === email) {
                        return contact[iter];
                    }
                }
            }
            return null;
        };
    };

    self.FromPhoneSearchStrategy = function (tel) {
        this.search = function (contact) {
            for (var iter = 0; iter < contact.length; iter++) {
                for (var it = 0; it < contact[iter].phones().length; it++) {
                    if (contact[iter].phones()[it].number() === tel) {
                        return contact[iter];
                    }
                }
            }
            return null;

        };
    };
    return self;
}(Contact || {}));