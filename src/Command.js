/**
 * Created by Lucie on 11/09/2015.
 */
var Contact = Contact || {};
Contact = (function (self) {
    "use strict";

    self.AddCommand = function () {
        var temp;
        this.execute = function (contact) {
            temp = contact;
            Contact.Contacts.instance().add(contact);
        };
        this.undo = function () {
            Contact.Contacts.instance().remove(temp.id());
            temp = null;
        };

    };

    self.RemoveCommand = function () {
        var temp;
        this.execute = function (contactId) {
            temp = Contact.Contacts.instance().get(contactId);
            Contact.Contacts.instance().remove(contactId);
        };

        this.undo = function () {
            Contact.Contacts.instance().add(temp);
            temp = null;
        };
    };
    return self;
}(Contact || {}));
