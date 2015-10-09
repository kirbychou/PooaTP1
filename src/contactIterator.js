/**
 * Created by lcarpent on 06/10/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    "use strict";


    self.Iterator = function (tableau) {
        var index = 0;
        var tab = [];

        var init = function (tableau) {
            tab = tableau;
            tab[tableau.length] = null;
        };
        init(tableau);

        this.hasNext = function () {
            if (tab[index + 1] !== null) {
                return true;
            } else {
                return false;
            }
        };
        this.first = function () {
            index = 0;
            return tab[index];
        };
        this.next = function () {
            if (this.hasNext()) {
                index = index + 1;
                return tab[index - 1];
            } else {
                return null;
            }
        };


    };
    return self;
}(Contact || {}));