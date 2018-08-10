

waldayu.transducers["iheyan_compare"] = (function() {
    var correspondences = {'ʤ': 'j', 'ɕ': 'sh', 'ɸ': 'f'};
    var keys = ['ʤ', 'ɕ', 'ɸ'];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();var config = {
    "L1": {
        "name": "Iheyan",
        "underlying": "",
        "compare": "iheyan_compare",
        "lettersInLanguage" : ['a', 'b', 'd', 'e', 'g', 'ʤ', 'ɸ', 'h', 'i', 'j', 'k', 'l', "'l", 'm', "'m", 'n', "'n", 'o', 'p', "p'", 'r', 's', 't', "t'", 'ʨ', 'u', 'w', 'j', 'ʔ', 'ː', 'ɕ']
    },
    "L2": {
        "name": "English",
        "underlying": "",
        "compare": ""
    }
};

/* Search Variables */
var l1_weights_config = {'underlying_form': 0.1, 'compare_form': 1.0};

var l1_thresholds_config = {'partial': 1.0, 'other': 4.0, 'exact': 0.0};

var l2_weights_config = {'definition': 1.0};

var l2_thresholds_config = {'partial': 1.9, 'other': 1000.0, 'exact': 0.9};
