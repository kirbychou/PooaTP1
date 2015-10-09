/**
 * Created by lcarpent on 09/10/15.
 */
/**
 * Created by lcarpent on 09/10/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    "use strict";
    self.Model = function () {
        this.contact= function(){
           return Contact.Contacts.instance().list();
        };
    };
    return self;
}(Contact || {}));

