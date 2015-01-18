ig.module(
    'game.components.i18n'
)
.requires(
    'plusplus.core.config',
    'game.components.i18n.i18n-ca',
    'game.components.i18n.i18n-en',
    'game.components.i18n.i18n-es'
)
.defines(function() {

    "use strict";

    var _c = ig.CONFIG;

    /**
     * Provides an interface to get localized text and image paths
     *
     *
     * @class
     * @extends ig.Class
     * @memeberof ig
     */
    ig.i18n = ig.Class.extend({


        init: function(){

            this.language = 'ca';
            this.resource = new ig['i18n' + this.capitaliseFirstLetter(this.language)]();
        },

        setLanguage : function(languageCode) {

            this.language = languageCode;
            this.resource = new ig['i18n' + this.capitaliseFirstLetter(this.language)]();

        },


        getMessage : function(messageCode) {

            return this.resource.getMessage(messageCode);
        },

        getItemName : function(itemCode) {
            return this.resource.getItemName(itemCode);
        },

        getCommandName : function(commandCode) {
            return this.resource.getCommandName(commandCode);
        },

        getLevelName : function(levelName) {
            return this.resource.getLevelName(levelName);
        },

        getCommandImage : function(key) {
            return this.resource.getCommandImage(key);
        },

        getCommandX : function(key) {
            return this.resource.getCommandX(key);
        },

        getCommandY : function(key) {
            return this.resource.getCommandY(key);
        },

        getLocalizedImagePath: function(imageCode) {
            return this.resource.getLocalizedImagePath(imageCode);
        },

        //TODO: Move this outside
        capitaliseFirstLetter: function(string)
        {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

    });

});