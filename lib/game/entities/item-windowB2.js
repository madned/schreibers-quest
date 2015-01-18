ig.module(
    'game.entities.item-windowB2'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * WindowB.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityItemWindowB2 = ig.global.EntityItemWindowB2 = ig.EntityExtended.extend({

        name: 'windowB2',

        _wmScalable: true,

        collides: ig.Entity.COLLIDES.NEVER,

		size: {
            x: 26,
            y: 32
        },

        persistent: true,

        // At which distance interaction should be triggered
        interactionDistance: 16,
       
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