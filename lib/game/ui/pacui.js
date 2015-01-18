ig.module(
    'game.ui.pacui'
)
.requires(
    // commands
    'game.ui.command-give',
    'game.ui.command-open',
    'game.ui.command-look',
    'game.ui.command-use',
    'game.ui.command-close',
    'game.ui.command-press',
    'game.ui.command-pickup',
    'game.ui.command-talk',
    'game.ui.command-pull',
    'game.ui.command-walk',
    'game.ui.command-question-mark',
    // command preview
    'game.ui.command-preview',
    'game.components.i18n',
    // config
    'plusplus.core.config'
)
.defines(function() {

    "use strict";

    var _c = ig.CONFIG;

    /**
     * Spawns all parts of the UI.
     *
     * Pacui stands for *P*oint *A*nd *C*lick *U*ser *I*nterface
     *
     * @class
     * @extends ig.Class
     * @memeberof ig
     */
    ig.Pacui = ig.Class.extend({

        /**
         * Spawns the commands and the command preview,
         */
        init: function(){

            // Commands
            this.spawnCommands();
            this.spawnCommandPreview();

        },

        /**
         * Spawns all UI commandos like "talk", "pick up" or "open".
         *
         * @require game.ui.command-give
         *
         */
        spawnCommands: function(){

            // First row
            ig.game.spawnEntity(ig.CommandGive, 16, 151, {animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + ig.game.i18n.getCommandImage('give'), ig.game.i18n.getCommandX('give'), ig.game.i18n.getCommandY('give') )});
            ig.game.spawnEntity(ig.CommandOpen, 16, 163, {animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + ig.game.i18n.getCommandImage('open'), ig.game.i18n.getCommandX('open'), ig.game.i18n.getCommandY('open') )});
            ig.game.spawnEntity(ig.CommandLook, 16, 175, {animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + ig.game.i18n.getCommandImage('look'), ig.game.i18n.getCommandX('look'), ig.game.i18n.getCommandY('look') )});

            // Second row
            ig.game.spawnEntity(ig.CommandUse, 61, 151, {animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + ig.game.i18n.getCommandImage('use'), ig.game.i18n.getCommandX('use'), ig.game.i18n.getCommandY('use') )});
            ig.game.spawnEntity(ig.CommandClose, 61, 163, {animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + ig.game.i18n.getCommandImage('close'), ig.game.i18n.getCommandX('close'), ig.game.i18n.getCommandY('close') )});
            ig.game.spawnEntity(ig.CommandPress, 61, 175, {animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + ig.game.i18n.getCommandImage('push'), ig.game.i18n.getCommandX('push'), ig.game.i18n.getCommandY('push') )});

            // Third row
            ig.game.spawnEntity(ig.CommandPickUp, 130, 151, {animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + ig.game.i18n.getCommandImage('pickup'), ig.game.i18n.getCommandX('pickup'), ig.game.i18n.getCommandY('pickup') )});
            ig.game.spawnEntity(ig.CommandTalk, 130, 163, {animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + ig.game.i18n.getCommandImage('talk'), ig.game.i18n.getCommandX('talk'), ig.game.i18n.getCommandY('talk') )});
            ig.game.spawnEntity(ig.CommandPull, 130, 175, {animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + ig.game.i18n.getCommandImage('pull'), ig.game.i18n.getCommandX('pull'), ig.game.i18n.getCommandY('pull') )});

            ig.game.spawnEntity(ig.CommandWalk, 0, 0, {animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + ig.game.i18n.getCommandImage('walk'), ig.game.i18n.getCommandX('walk'), ig.game.i18n.getCommandY('walk') )});

            // Question mark

            ig.game.spawnEntity(ig.CommandQuestionMark, 0, 0);
        },

        /**
         * Spawns an entity that displays the command preview
         *
         * @require game.ui.command-preview
         *
         */
        spawnCommandPreview: function(){

            ig.game.spawnEntity(ig.CommandPreview, 0, 135);

        }

    });

});