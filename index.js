'use strict';

function iterate(form, disabledValue) {
    var els = form.elements
      , el
      , i = 0
    ;

    while (el = els[i++]) {
        el.disabled = disabledValue;
    }
}

exports.disable = function (form) {
    iterate(form, true);
};

exports.enable = function (form) {
    iterate(form, false);
};
