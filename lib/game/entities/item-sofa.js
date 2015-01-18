ig.module(
    'game.entities.item-sofa'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Sofa.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityItemSofa = ig.global.EntityItemSofa = ig.EntityExtended.extend({

        name: 'sofa',

        _wmScalable: true,

        collides: ig.Entity.COLLIDES.NEVER,

		size: {
            x: 28,
            y: 20
        },

        persistent: true,

        state: 'full',

        matchingInventoryItem: ig.EntityInventoryItemGumex,

        // At which distance interaction should be triggered
        interactionDistance: 12,

        interact: function( command ){

            if( command.command === 'Look'){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookSofa1'));
            }
            else if( command.command === 'Use' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('useSofa1'),ig.game.i18n.getMessage('useSofa2'));
            }
            else if( command.command === 'Give' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('giveSofa1'));
            }
            else if( command.command === 'Push' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pushSofa1'));
            }
            else if( command.command === 'Pick up' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupSofa1'));
            }
            else if( command.command === 'Pull' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pullSofa1'));
            }
            else if( command.command === 'Open' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('openSofa1'));
            }
            else if( command.command === 'Close' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('closeSofa1'));
            }
            else if( command.command === 'Talk' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkSofa1'));
            }
            else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultSofa1'));
            }
        }
	});

});