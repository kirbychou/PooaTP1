/**
 * Created by Lucie on 11/09/2015.
 */
var Contact = Contact || {};
Contact = (function (self) {
        "use strict";
        self.ProxyCache = function (tableauContact) {
            var tableauProxy = [];
            var init = function (tableauContact) {

                tableauProxy = tableauContact;


            };
            var cache = [];
            this.search = function (strategie) {
                var resultat = null;

                if (this.inCache(strategie) && cache[strategie] !== null) {
                    return cache[strategie];
                }

                for (var i = 0; i < tableauProxy.length; i++) {
                    resultat = strategie.search(tableauProxy[i].list());

                    if (resultat !== null) {
                        cache[strategie] = resultat;
                        resultat.register(this);
                        return resultat;
                    }
                }
                return resultat;
            };
            this.notified = function(contact){
                for(var i in cache){
                    if(cache[i] === contact){
                        cache[i] = null;
                    }
                }

            };
            this.inCache = function (strategie) {
                if(cache[strategie] !== undefined) {
                    return true;
                }
                return false;

            };
            init(tableauContact);
        };
        return self;
    }
    (Contact || {})
)
;