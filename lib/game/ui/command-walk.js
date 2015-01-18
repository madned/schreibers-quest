ig.module(
    'game.ui.command-walk'
)
.requires(
    'plusplus.core.config',
    'plusplus.ui.ui-button',
    'game.ui.command'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Entity that functions as the "walk command". Part of the Ui.
     *
     * @class
     * @extends ig.Command
     * @memeberof ig
     */
    ig.CommandWalk = ig.global.CommandWalk = ig.Command.extend({

        command: 'Walk',

        commandName : 'Ir',

        size: {
            x: 0,
            y: 0
        },

        animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'ui/ui_button_walk.gif', 0, 0 ) //TODO: Use a blank image
		
	});

});