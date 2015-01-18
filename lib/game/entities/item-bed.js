ig.module(
    'game.entities.item-bed'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Bed.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityItemBed = ig.global.EntityItemBed = ig.EntityExtended.extend({

        name: 'bed',

        _wmScalable: true,

        collides: ig.Entity.COLLIDES.NEVER,

		size: {
            x: 68,
            y: 20
        },

        persistent: true,

        // At which distance interaction should be triggered
        interactionDistance: 12,

        interact: function( command ){

            if( command.command === 'Look'){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookBed1'));
            }
            else if( command.command === 'Use' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('useBed1'));
            }
            else if( command.command === 'Give' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('giveBed1'));
            }
            else if( command.command === 'Push' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pushBed1'));
            }
            else if( command.command === 'Pick up' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupBed1'));
            }
            else if( command.command === 'Pull' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pullBed1'));
            }
            else if( command.command === 'Open' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('openBed1'));
            }
            else if( command.command === 'Close' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('closeBed1'));
            }
            else if( command.command === 'Talk' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkBed1'));
            }
            else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultBed1'));
            }

        }
		
	});

});