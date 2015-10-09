/**
 * Created by lcarpent on 09/10/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    "use strict";
    self.Controller = function (model, view) {
        var mod, viewer;
        var init = function (model, view) {
            mod = model;
            viewer = view;
        };
        init(model, view);
    };
    return self;
}(Contact || {}));

/**
 * Created by lcarpent on 09/10/15.
 */
