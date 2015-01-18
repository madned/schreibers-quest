ig.module(
    'game.entities.item-drawer'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config',
    'game.entities.inventory-item-tphone'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Drawer.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityItemDrawer = ig.global.EntityItemDrawer = ig.EntityExtended.extend({

        name: 'drawer',

        _wmScalable: true,

        collides: ig.Entity.COLLIDES.NEVER,

		size: {
            x: 12,
            y: 6
        },

        persistent: true,

        state: 'closed',

        matchingInventoryItem: ig.EntityInventoryItemTphone,

        // At which distance interaction should be triggered
        interactionDistance: 12,

        interact: function( command ){

           if( command.command === 'Look'){

                if (ig.game.roomState.tphone.isPickedUp===false) {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookDrawer1'));
                } 
                else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookDrawer2'));
                }
            }
            else if( command.command === 'Use' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('useDrawer1'));
            }
            else if( command.command === 'Give' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('giveDrawer1'));
            }
            else if( command.command === 'Push' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pushDrawer1'));
            }
            else if( command.command === 'Pick up' ){

                if (this.state==='opened') {

                    if (ig.game.roomState.tphone.isPickedUp===false) {
                        ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupDrawer1'));
                        ig.game.inventory.addItem( this.matchingInventoryItem, this );
                        ig.game.roomState.tphone.isPickedUp = true;
                    } else {
                        ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupDrawer3'));
                    }

                } else {

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupDrawer2'));
                }


            }
            else if( command.command === 'Pull' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pullDrawer1'));
            }
            else if( command.command === 'Open' ){

                 if (this.state==='opened') {

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('openDrawer1'));
                } else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('openDrawer2'));
                    this.state='opened'

                }
            }
            else if( command.command === 'Close' ){


                 if (this.state==='opened') {

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('closeDrawer1'));
                    this.state='closed';
                } else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('closeDrawer2'));

                }
            }
            else if( command.command === 'Talk' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkDrawer1'));
            }
            else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultDrawer1'));
            }
        }
		
	});

});