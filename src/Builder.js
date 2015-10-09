var Contact = Contact || {};
Contact = (function (self) {
    "use strict";

    self.Builder = function () {
        var contact;
        this.createMinimalContact = function (value, value1, value2) {
            contact = new Contact.Contact(value, value1, value2);
            return contact;
        };

        this.createContactWithProfessionalMail = function (value, value1, value2, value3) {
            contact = new Contact.Contact(value, value1, value2);
            contact.add_mail(new Contact.Mail(value3, Contact.MailCategory.PRO));
            return contact;
        };

        this.createContactWithProfessionalMobile = function (value, value1, value2, value3) {
            contact = new Contact.Contact(value, value1, value2);
            contact.add_phone(new Contact.Phone(value3, Contact.PhoneCategory.PRO, Contact.PhoneType.MOBILE));
            return contact;
        };

        this.createContactWithTag = function (genre, prenom, nom, tag) {
            contact = new Contact.Contact(genre, prenom, nom);
            contact.addTag(tag);
            return contact;
        };
        this.loadContact = function (id, value, value1, value2) {
            contact = new Contact.Contact(value, value1, value2);
            contact.setID(id);
            return contact;
        };

    };
    return self;
}(Contact || {}));
/**
 * Created by lcarpent on 10/09/15.
 */

