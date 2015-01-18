ig.module(
    'game.entities.inventory-item-map'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Inventory item map.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityInventoryItemMap = ig.global.EntityInventoryItemMap = ig.EntityExtended.extend({

        name: 'map',

		size: {
            x: 30,
            y: 16
        },
		
		animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'inventory-item-map.gif', 30, 16 ),

        animInit: 'idle',

		animSettings: {
            idle: {
                frameTime: 1,
                sequence: [0]
            }
		},

        category: 'inventory',

        interact: function( command ){

            if( command.command === 'Look'){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookInventoryMap1'),ig.game.i18n.getMessage('lookInventoryMap2'));
                    if (!ig.game.gameState.placeGoalAchieved) {
                        var theme = new ig.Sound( _c.PATH_TO_MEDIA + 'music/newGoalAchieved.*' );
                        theme.play();

                        ig.game.gameState.placeGoalAchieved=true;
                        ig.game.gameState.newGoalAchieved=true;
                    }
                    window.open('https://www.google.es/maps/search/mercantic/@41.478038,2.070309,17z/data=!3m1!4b1','_blank');
            }
            else if( command.command === 'Use' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('useInventoryMap1'));
            }
            else if( command.command === 'Give' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('giveInventoryMap1'));
            }
            else if( command.command === 'Push' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pushInventoryMap1'));
            }
            else if( command.command === 'Pick up' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupInventoryMap1'));
            }
            else if( command.command === 'Pull' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pullInventoryMap1'));
            }
            else if( command.command === 'Open' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('openInventoryMap1'));
            }
            else if( command.command === 'Close' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('closeInventoryMap1'));
            }
            else if( command.command === 'Talk' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkInventoryMap1'),ig.game.i18n.getMessage('talkInventoryMap2'));
            }
            else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultInventoryMap1'));
            }
        }
	});

});