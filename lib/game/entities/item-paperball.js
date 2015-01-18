ig.module(
    'game.entities.item-paperball'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config',
    'game.entities.inventory-item-paperball',
    'game.components.i18n'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Bottle item
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityItemPaperball = ig.global.EntityItemPaperball = ig.EntityExtended.extend({

        name: 'paperball',

        collides: ig.Entity.COLLIDES.NEVER,

		size: {
            x: 7,
            y: 8
        },

        // At which distance interaction should be triggered
        interactionDistance: 10,

        matchingInventoryItem: ig.EntityInventoryItemPaperball,
		
		animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'item-paperball.gif', 7, 8 ),

        animInit: 'idle',

		animSettings: {
            idle: {
                frameTime: 1,
                sequence: [0]
            }
		},



        interact: function( command ){

            if( command.command === 'Look'){
                ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookPaperball1'));
            }
            else if( command.command === 'Use' ){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('usePaperball1'));
            }
            else if( command.command === 'Give' ){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('givePaperball1'));
            }
            else if( command.command === 'Push' ){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pushPaperball1'));
            }
            else if( command.command === 'Pick up' ){
                ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupPaperball1'));
                // Add to inventory
                ig.game.inventory.addItem( this.matchingInventoryItem, this );
                // Update room state
                ig.game.roomState.paperball.isPickedUp = true;

            }
            else if( command.command === 'Pull' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pullPaperball1'));
            }
            else if( command.command === 'Open' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('openPaperball1'));
            }
            else if( command.command === 'Close' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('closePaperball1'));
            }
            else if( command.command === 'Talk' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkPaperball1'));
            }
            else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultPaperball1'));
            }

         
        }
		
	});

});