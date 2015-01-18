ig.module(
    'game.entities.item-papers'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config',
    'game.components.i18n'
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
    ig.EntityItemPapers = ig.global.EntityItemPapers = ig.EntityExtended.extend({

        name: 'papers',

        _wmScalable: true,

        collides: ig.Entity.COLLIDES.NEVER,

		size: {
            x: 8,
            y: 8
        },

        // At which distance interaction should be triggered
        interactionDistance: 20,

        interact: function( command ){
            if( command.command === 'Look'){
                     ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookPapers1'),ig.game.i18n.getMessage('lookPapers2'),ig.game.i18n.getMessage('lookPapers3'));
            }
            else if( command.command === 'Use' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('usePapers1'));
            }
            else if( command.command === 'Give' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('givePapers1'));
            }
            else if( command.command === 'Push' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pushPapers1'));
            }
            else if( command.command === 'Pick up' ){

                if  (ig.game.gameState.placeGoalAchieved === true)
                  ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupPapers1'));
                else 
                  ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupPapers2'));
            }
            else if( command.command === 'Pull' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('pullPapers1'));
            }
            else if( command.command === 'Open' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('openPapers1'));
            }
            else if( command.command === 'Close' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('closePapers1'));
            }
            else if( command.command === 'Talk' ){

                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkPapers1'));
            }
            else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultPapers1'));
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