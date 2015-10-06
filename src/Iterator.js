/**
 * Created by lcarpent on 06/10/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    "use strict";


    self.Iterator = function (tableau) {
        var index = -1;
        var tab = [];

        var init = function (tableau) {
            tab = tableau;
            tab[tableau.length] = null;
        };
        init(tableau);

        this.hasNext = function () {
            if (tab[index + 1] !== null) {
                return true;
            }
            return false;
        };

        this.next = function () {
            index = index + 1;
            return tab[index];
        };


        this.iterator = function () {
            return this;
        };

    };
    return self;
}(Contact || {}));