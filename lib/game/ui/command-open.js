ig.module(
    'game.ui.command-open'
)
.requires(
    'plusplus.core.config',
    'plusplus.ui.ui-button',
    'game.ui.command'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Entity that functions as the "open command". Part of the Ui.
     *
     * @class
     * @extends ig.Command
     * @memeberof ig
     */
    ig.CommandOpen = ig.global.CommandOpen = ig.Command.extend({

        command: 'Open',

        commandName : 'Abrir',

        size: {
            x: 34,
            y: 10
        },

        animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'ui/ui_button_open.gif', 34, 10 )
		
	});

});