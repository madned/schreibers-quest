ig.module(
    'game.entities.item-clothes'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Clothes.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityItemClothes = ig.global.EntityItemClothes = ig.EntityExtended.extend({

        name: 'clothes',

        _wmScalable: true,

        collides: ig.Entity.COLLIDES.NEVER,

		size: {
            x: 24,
            y: 32
        },

        // At which distance interaction should be triggered
        interactionDistance: 16,

        interact: function( command ){
            if( command.command === 'Look'){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookClothes1'), ig.game.i18n.getMessage('lookClothes2'),ig.game.i18n.getMessage('lookClothes3'));
                    if (!ig.game.gameState.clothesGoalAchieved) {
                        var theme = new ig.Sound( _c.PATH_TO_MEDIA + 'music/newGoalAchieved.*' );
                        theme.play();

                        ig.game.gameState.clothesGoalAchieved=true;
                        ig.game.gameState.newGoalAchieved=true;
                    }
            }
            else if( command.command === 'Use' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('useClothes1'));
            }
            else if( command.command === 'Give' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('giveClothes1'));
            }
            else if( command.command === 'Push' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pushClothes1'));
            }
            else if( command.command === 'Pick up' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupClothes1'));
            }
            else if( command.command === 'Pull' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pullClothes1'));
            }
            else if( command.command === 'Open' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('openClothes1'));
            }
            else if( command.command === 'Close' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('closeClothes1'));
            }
            else if( command.command === 'Talk' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkClothes1'));
            }
            else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultClothes1'));
            }

        }
       
		
	});

});