ig.module(
    'game.entities.item-blackboard'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Blackboard.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityItemBlackboard = ig.global.EntityItemBlackboard = ig.EntityExtended.extend({

        name: 'blackboard',

        _wmScalable: true,

        persistent: true,

        collides: ig.Entity.COLLIDES.NEVER,

		size: {
            x: 28,
            y: 20
        },

        sealed: true,

        state: 'untouched',

        matchingInventoryItem: ig.EntityInventoryItemStick,

        // At which distance interaction should be triggered
        interactionDistance: 30,

        interact: function( command ){

            if( command.command === 'Look'){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookBlackboard1'),ig.game.i18n.getMessage('lookBlackboard2'),ig.game.i18n.getMessage('lookBlackboard3'));
            }
            else if( command.command === 'Use' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('useBlackboard1'));
            }
            else if( command.command === 'Give' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('giveBlackboard1'));
            }
            else if( command.command === 'Push' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pushBlackboard1'));
            }
            else if( command.command === 'Pick up' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupBlackboard1'));
            }
            else if( command.command === 'Pull' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pullBlackboard1'));
            }
            else if( command.command === 'Open' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('openBlackboard1'));
            }
            else if( command.command === 'Close' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('closeBlackboard1'));
            }
            else if( command.command === 'Talk' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkBlackboard1'),ig.game.i18n.getMessage('talkBlackboard2'),ig.game.i18n.getMessage('talkBlackboard3'));
            }
            else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultBlackboard1'));
            }

        }

	});

});