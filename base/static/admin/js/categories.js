(function($) {

    var fields = ['gender', 'number', 'person', 'adj_degree', 'adv_meaning',
                  'adj_interp', 'art_type', 'conj_type', 'noun_degree',
                  'noun_interp', 'noun_type', 'prep_form', 'polite',
                  'pron_case', 'quan_type', 'verb_base', 'verb_conj',
                  'verb_mood', 'verb_prnl', 'verb_tense', 'verb_class',
                  'verb_trans', 'verb_type'];
    var categories = {
        "adj": ['adj_degree', 'adj_interp', 'gender', 'number'],
        "adv": ['adv_meaning'],
        "art": ['art_type', 'gender', 'number'],
        "demadj": ['gender', 'number'],
        "dempron": ['gender', 'number'],
        "excl": ['gender', 'number'],
        "indefpron": ['gender', 'number'],
        "int": ['gender', 'number'],
        "interj": [],
        "conj": ['conj_type'],
        "noun": ['noun_degree', 'noun_interp', 'noun_type',
                 'gender', 'number'],
        "possadj": ['gender', 'number', 'person', 'polite'],
        "posspron": ['gender', 'number', 'person', 'polite'],
        "prep": ['prep_form'],
        "pron": ['pron_case', 'gender', 'number', 'person', 'polite'],
        "relpron": ['gender', 'number'],
        "quan": ['quan_type', 'gender', 'number'],
        "verb": ['verb_base', 'verb_conj', 'verb_mood',
                 'verb_prnl', 'verb_tense', 'verb_trans',
                 'verb_type', 'verb_class', 'number', 'person', 'polite']
     }

    init = function() {
        $("#id_category").change(function(e) {
            var selected = $(this).val();
            for(var i in fields) {
                field = fields[i];
                if (selected && categories[selected].indexOf(field) >= 0) {
                    $("div."+ field).show();
                } else {
                    $("div."+ field).hide();
                }
            }
        });
        $("#id_category").change();
    }

    $(document).ready(init);
})((typeof django !== "undefined" && django.jQuery) || (typeof django === "undefined" && jQuery));


