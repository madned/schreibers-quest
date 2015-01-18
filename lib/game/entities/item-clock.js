ig.module(
    'game.entities.item-clock'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config',
    'game.components.i18n',
    'game.ui.command-question-mark'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Clock.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityItemClock = ig.global.EntityItemClock = ig.EntityExtended.extend({

        name: 'clock',

        _wmScalable: true,

        collides: ig.Entity.COLLIDES.NEVER,

		size: {
            x: 8,
            y: 8
        },

        // At which distance interaction should be triggered
        interactionDistance: 100,

        interact: function( command ){

            if( command.command === 'Look' ){

                ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookClock1'),ig.game.i18n.getMessage('lookClock2'),ig.game.i18n.getMessage('lookClock3'));
                if (!ig.game.gameState.timeGoalAchieved) {
                    var theme = new ig.Sound( _c.PATH_TO_MEDIA + 'music/newGoalAchieved.*' );
                    theme.play();

                    ig.game.gameState.timeGoalAchieved=true;
                    ig.game.gameState.newGoalAchieved=true;
                }
                
            }
            else if( command.command === 'Use' ){

                ig.game.getPlayer().speak(ig.game.i18n.getMessage('useClock1'));

            }
            else if( command.command === 'Pick up' ){

                ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupClock1'));

            }
            else if( command.command === 'Talk' ){

                ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkClock1'));

            }
            else {

                ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultClock1'));

            }

        },

        /**
         * Gets called when the player tries to
         * combine another item with this item
         *
         * @param {object} entity The item entity
         */
        combine: function( entity ){

            ig.game.getPlayer().speak('No, no tiene sentido');

        }
		
	});

});