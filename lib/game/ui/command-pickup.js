ig.module(
    'game.ui.command-pickup'
)
.requires(
    'plusplus.core.config',
    'plusplus.ui.ui-button',
    'game.ui.command'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Entity that functions as the "pick up command". Part of the Ui.
     *
     * @class
     * @extends ig.Command
     * @memeberof ig
     */
    ig.CommandPickUp = ig.global.CommandPickUp = ig.Command.extend({

        command: 'Pick up',

        commandName : 'Coger',

        size: {
            x: 38,
            y: 11
        },

        animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'ui/ui_button_pickup.gif', 38, 11 )
		
	});

});