ig.module(
    'game.entities.inventory-item-tphone'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Inventory item tphone.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityInventoryItemTphone = ig.global.EntityInventoryItemTphone = ig.EntityExtended.extend({

        name: 'tphone',

        state: 'apagat',

		size: {
            x: 30,
            y: 16
        },
		
		animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'inventory-item-cellphone.gif', 30, 16 ),

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
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookInventoryTPhone1'));
            }
            else if( command.command === 'Use' ){

                    if (this.state==='apagat') {
                        ig.game.getPlayer().speak(ig.game.i18n.getMessage('useInventoryTPhone1'),ig.game.i18n.getMessage('useInventoryTPhone2'));
                        this.state='ences';
                    }
                    else {
                        if (ig.game.gameState.confirmationGoalAchieved) {
                            ig.game.getPlayer().speak(ig.game.i18n.getMessage('useInventoryTPhone4'),ig.game.i18n.getMessage('useInventoryTPhone5'));
                        }
                        else {
                            ig.game.getPlayer().speak(ig.game.i18n.getMessage('useInventoryTPhone3'));
                        }
                    }

            }
            else if( command.command === 'Give' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('giveInventoryTPhone1'));
            }
            else if( command.command === 'Push' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pushInventoryTPhone1'));
            }
            else if( command.command === 'Pick up' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupInventoryTPhone1'));
            }
            else if( command.command === 'Pull' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pullInventoryTPhone1'));
            }
            else if( command.command === 'Open' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('openInventoryTPhone1'));
            }
            else if( command.command === 'Close' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('closeInventoryTPhone1'));
            }
            else if( command.command === 'Talk' ){

                if (this.state=='apagat') {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkInventoryTPhone9'));
                } else if (this.state === 'trucat') {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkInventoryTPhone8'));
                }
                else {
                    this.state='trucat';
                    
                    var theme = new ig.Sound( _c.PATH_TO_MEDIA + 'music/newGoalAchieved.*' );
                    theme.play();

                    ig.game.gameState.confirmationGoalAchieved=true;
                    ig.game.gameState.newGoalAchieved=true;
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkInventoryTPhone1'), ig.game.i18n.getMessage('talkInventoryTPhone2'), ig.game.i18n.getMessage('talkInventoryTPhone3'), ig.game.i18n.getMessage('talkInventoryTPhone4'),
                                                ig.game.i18n.getMessage('talkInventoryTPhone5'), ig.game.i18n.getMessage('talkInventoryTPhone6'), ig.game.i18n.getMessage('talkInventoryTPhone7'));
                }
            }
            else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultInventoryTPhone1'));
            }
        }
	});

});