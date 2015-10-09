/**
 * Created by lcarpent on 09/10/15.
 */
Contact = (function (self) {
    'use strict';
    self.View = function (model) {
        var mod;
        var init = function (model) {
            mod = model;
            var tableau = $("<table/>");
            var header = $('<tr/>');
            header.appendTo(tableau);
            $('<th />', {id: "cellFirstName", html: 'First name'}).appendTo(header);
            $('<th />', {id: "cellLastName", html: 'Last name'}).appendTo(header);
            $('<th />', {id: "cellPhones", html: 'Phones'}).appendTo(header);
            $('<th />', {id: "cellMails", html: 'Mails'}).appendTo(header);
            $('<th />', {id: "cellTags", html: 'Tags'}).appendTo(header);
            $('<th />', {id: "cellActions", html: 'Actions'}).appendTo(header);

            tableau.appendTo($('#contacts'));

            var contacts = mod.contact();
            var temp_phone, temp_fixe = null;

            for (var i = 0; i < contacts.length; i++) {

                var ligne = $('<tr>');
                $('<td/>', {html: contacts[i].firstName()}).appendTo(ligne);
                $('<td/>', {html: contacts[i].lastName()}).appendTo(ligne);

                for (var j = 0; j < contacts[i].phones().length; j++) {
                    var phone = " " + contacts[i].phones()[j].number();
                    var cate = contacts[i].phones()[j].category();

                    switch (cate) {
                        case 1:
                            temp_phone = "PERSO";
                            break;
                        case 2:
                            temp_phone = "PRO";
                            break;

                        default:
                            temp_phone = null;

                    }

                    var type = contacts[i].phones()[j].type();

                    switch (type) {
                        case 1:
                            temp_fixe = "MOBILE";
                            break;
                        case 2:
                            temp_fixe = "FIXE";
                            break;
                        case 3:
                            temp_fixe = "PHONE";

                        default:
                            temp_fixe = null;

                    }
                    phone +=" " + temp_phone + " " + temp_fixe;
        
                }
                $('<td/>', {html: phone}).appendTo(ligne);
                $('<td/>', {html: contacts[i].mails()}).appendTo(ligne);
                $('<td/>', {html: contacts[i].tag()}).appendTo(ligne);


                ligne.appendTo(tableau);
            }
        };
        init(model);
    };
    return self;
}(Contact || {}) );