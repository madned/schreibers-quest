ig.module(
    'game.entities.item-present'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Present.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityItemPresent = ig.global.EntityItemPresent = ig.EntityExtended.extend({

        name: 'present',

        _wmScalable: true,

        collides: ig.Entity.COLLIDES.NEVER,

		size: {
            x: 30,
            y: 30
        },

        persistent: true,

        state: 'First',

        matchingInventoryItem: ig.EntityInventoryItemGumex,


        animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'item-present.gif', 30, 30 ),

        animInit: 'idle',

        animSettings: {
            idle: {
                frameTime: 1,
                sequence: [0]
            }
        },



        // At which distance interaction should be triggered
        interactionDistance: 12,

        interact: function( command ){

      
            if( command.command === 'Look'){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookPresent1'),ig.game.i18n.getMessage('lookPresent2'),ig.game.i18n.getMessage('lookPresent3'));
            }
            else if( command.command === 'Use' ){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('usePresent1'));        
            }
            else if( command.command === 'Give' ){

                    if (this.state=='First') {
                        ig.game.getPlayer().speak(ig.game.i18n.getMessage('givePresent1'));
                    }
                    else {
                        ig.game.getPlayer().speak(ig.game.i18n.getMessage('givePresent2'),ig.game.i18n.getMessage('givePresent3'));
                        if (!ig.game.gameState.presentGoalAchieved) {
                            var theme = new ig.Sound( _c.PATH_TO_MEDIA + 'music/newGoalAchieved.*' );
                            theme.play();

                            ig.game.gameState.presentGoalAchieved=true;
                            ig.game.gameState.newGoalAchieved=true;
                        }
                    }
            }
            else if( command.command === 'Push' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pushPresent1'));
            }
            else if( command.command === 'Pick up' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupPresent1'));
                    this.state='Second';
            }
            else if( command.command === 'Pull' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pullPresent1'));
            }
            else if( command.command === 'Open' ){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('openPresent1'));
            }
            else if( command.command === 'Close' ){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('closePresent1'));
            }
            else if( command.command === 'Talk' ){
                ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkPresent1'));
            }
            else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultPresent1'));
            }
        }
		
	});

});