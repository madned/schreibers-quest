ig.module(
    'game.entities.item-exit'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config',
    'game.components.game-state'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Exit.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityItemExit = ig.global.EntityItemExit = ig.EntityExtended.extend({

        name: 'exit',

        _wmScalable: true,

        collides: ig.Entity.COLLIDES.NEVER,

		size: {
            x: 16,
            y: 44
        },

        persistent: true,

        state: 'full',

        matchingInventoryItem: ig.EntityInventoryItemGumex,

        // At which distance interaction should be triggered
        interactionDistance: 12,

        interact: function( command ){

            if( command.command === 'Look'){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookExit1'));
            }
            else if( command.command === 'Use' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('useExit1'));
            }
            else if( command.command === 'Give' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('giveExit1'));
            }
            else if( command.command === 'Push' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pushExit1'));
            }
            else if( command.command === 'Pick up' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupExit1'));
            }
            else if( command.command === 'Pull' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pullExit1'));
            }
            else if( command.command === 'Open' ){

                    if(ig.game.gameState.clothesGoalAchieved && 
                        ig.game.gameState.presentGoalAchieved &&
                        ig.game.gameState.timeGoalAchieved &&
                        ig.game.gameState.placeGoalAchieved &&
                        ig.game.gameState.confirmationGoalAchieved) {
                        
                        ig.game.getPlayer().speak(ig.game.i18n.getMessage('useExit2'));
                        ig.game.showEnding();
                    } else {
                        ig.game.getPlayer().speak(ig.game.i18n.getMessage('openExit1'));
                    }
            }
            else if( command.command === 'Close' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('closeExit1'));
            }
            else if( command.command === 'Talk' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkExit1'));
            }
            else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultExit1'));
            }
        }		
	});

});