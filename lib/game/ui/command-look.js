ig.module(
    'game.ui.command-look'
)
.requires(
    'plusplus.core.config',
    'plusplus.ui.ui-button',
    'game.ui.command'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Entity that functions as the "look command". Part of the Ui.
     *
     * @class
     * @extends ig.Command
     * @memeberof ig
     */
    ig.CommandLook = ig.global.CommandLook = ig.Command.extend({

        command: 'Look',

        keymap: 'look at',

        commandName : 'Mirar',

        size: {
            x: 33,
            y: 10
        },

        animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'ui/ui_button_look.gif', 33, 10 )
		
	});

});