ig.module(
    'game.entities.item-windowR'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * WindowR.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityItemWindowR = ig.global.EntityItemWindowR = ig.EntityExtended.extend({

        name: 'window',

        _wmScalable: true,

        collides: ig.Entity.COLLIDES.NEVER,

		size: {
            x: 20,
            y: 32
        },

        persistent: true,

        // At which distance interaction should be triggered
        interactionDistance: 15,
        
        interact: function( command ){

             if (command.command === 'Look'){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookWindow1'));
            }
            else if( command.command === 'Open' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('openWindow1'));
            }
            else if( command.command === 'Close' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('closeWindow1'));
            }
            else if( command.command === 'Talk' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkWindow1'),ig.game.i18n.getMessage('talkWindow2'),ig.game.i18n.getMessage('talkWindow3'));
            }
            else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultWindow1'));
            }

        }
		
	});

});