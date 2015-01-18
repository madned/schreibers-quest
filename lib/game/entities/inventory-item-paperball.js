ig.module(
    'game.entities.inventory-item-paperball'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config',    
    'game.entities.inventory-item-map'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Inventory item paperball
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityInventoryItemPaperball = ig.global.EntityInventoryItemPaperball = ig.EntityExtended.extend({

        name: 'paperball',

        state: 'closed',

		size: {
            x: 30,
            y: 16
        },
		
		animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'inventory-item-paperball.gif', 30, 16 ),

        animInit: 'idle',

        matchingInventoryItem: ig.EntityInventoryItemMap,

		animSettings: {
            idle: {
                frameTime: 1,
                sequence: [0]
            }
		},

        category: 'inventory',

        interact: function( command ){

            if( command.command === 'Look' ){

                if( this.state === 'closed' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookInventoryPaperball1'));

                }

            }
            else if( command.command === 'Open' ){

                ig.game.getPlayer().speak(ig.game.i18n.getMessage('openInventoryPaperball1'));

                this.state = 'open';

                ig.game.inventory.removeInventoryItem( this );

                ig.game.inventory.addItem( this.matchingInventoryItem );


            }
            else if( command.command === 'Use' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('useInventoryPaperball1'));
            }
            else if( command.command === 'Give' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('giveInventoryPaperball1'));
            }
            else if( command.command === 'Push' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pushInventoryPaperball1'));
            }
            else if( command.command === 'Pick up' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupInventoryPaperball1'));
            }
            else if( command.command === 'Pull' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pullInventoryPaperball1'));
            }
            else if( command.command === 'Close' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('closeInventoryPaperball1'));
            }
            else if( command.command === 'Talk' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkInventoryPaperball1'));
            }
            else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultInventoryPaperball1'));
            }
          /*  else if( command === 'Öffne' ){

                if( this.state === 'closed' ){

                    ig.game.getPlayer().speak('Mist. Ich bekomme den Verschluß nicht auf, er sitzt zu fest.');

                }
                else {

                    ig.game.getPlayer().speak('Die Flasche ist bereits offen.');

                }

            }
            else if( command === 'Ziehe' || command === 'Drücke' ){

                ig.game.getPlayer().speak('Nein, ich will die Flasche nicht kaputt machen.');

            }
            else if( command === 'Nimm' ){

                ig.game.getPlayer().speak('Das besitze ich doch schon.');

            }
            else {

                ig.game.getPlayer().speak('Der Befehl, er macht keinen Sinn.');

            }*/

        },

        
	});

});