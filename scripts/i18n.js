define(['i18n/en_ca', 'i18n/fr_ca'], function (en_ca, fr_ca) {

    if (locale == "fr_ca")
        return fr_ca;

    return en_ca;

});