ig.module(
    'game.entities.item-cactus'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Cactus.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityItemCactus = ig.global.EntityItemCactus = ig.EntityExtended.extend({

        name: 'cactus',

        _wmScalable: true,

        collides: ig.Entity.COLLIDES.NEVER,

		size: {
            x: 6,
            y: 6
        },

        persistent: true,

        state: 'full',

        matchingInventoryItem: ig.EntityInventoryItemGumex,

        // At which distance interaction should be triggered
        interactionDistance: 12,

        interact: function( command ){

             if( command.command === 'Look'){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookCactus1'));
            }
            else if( command.command === 'Use' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('useCactus1'));
            }
            else if( command.command === 'Give' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('giveCactus1'));
            }
            else if( command.command === 'Push' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pushCactus1'));
            }
            else if( command.command === 'Pick up' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupCactus1'));
            }
            else if( command.command === 'Pull' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pullCactus1'));
            }
            else if( command.command === 'Open' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('openCactus1'));
            }
            else if( command.command === 'Close' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('closeCactus1'));
            }
            else if( command.command === 'Talk' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkCactus1'));
            }
            else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultCactus1'));
            }

        }
	});

});