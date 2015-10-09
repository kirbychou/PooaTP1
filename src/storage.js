/**
 * Created by lcarpent on 06/10/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    "use strict";

    var initStorage = function () {
        this.save = function (contacts) {
            var contact = contacts.list();
            for (var i = 0; i < contact.length; i++) {
                localStorage.setItem("contacts/" + contact[i].id(), JSON.stringify(contact[i].toObject()));
            }
        };

        this.load = function (contacts) {
            for (var i in localStorage) {
                var objectJson = JSON.parse(localStorage[i]);
                var id = i.split("/")[1];

                contacts.add(new Contact.Builder().loadContact(id, Contact.Gender.MR, objectJson.FirstName, objectJson.lastName));
            }
        };
    };
    var session = null;
    self.Storage = {
        instance: function () {
            if (session === null) {
                session = new initStorage();
            }

            return session;
        }
    };

    return self;
}(Contact || {}));