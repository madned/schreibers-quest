ig.module(
    'game.entities.item-map'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config',
    'game.components.game-state',
    'game.entities.item-goal-clothes',
    'game.entities.item-goal-confirmation',
    'game.entities.item-goal-place',
    'game.entities.item-goal-present',
    'game.entities.item-goal-time'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Map.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityItemMap = ig.global.EntityItemMap = ig.EntityExtended.extend({

        name: 'map',

        _wmScalable: true,

        collides: ig.Entity.COLLIDES.NEVER,

		size: {
            x: 216,
            y: 111
        },

        pos: {
            x: 52,
            y: 28
        },

        zIndex: _c.Z_INDEX_ABOVE_PLAYER,

        animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'item-map.png', 216, 111 ),

        animInit: 'idle',

        animSettings: {
            idle: {
                frameTime: 1,
                sequence: [0]
            },
            en: {
                frameTime: 1,
                sequence: [1]
            },
            es: {
                frameTime: 1,
                sequence: [2]
            }
        },

        first: true,

        localized : false,

        interact: function( command ){
        },

        init: function( x, y, settings ) {

            this.addAnim( 'idle', 1, [0] );
            this.addAnim( 'en', 1, [1] );
            this.addAnim( 'es', 1, [2] );
            

            this.currentAnim = this.anims[ig.game.i18n.getLocalizedImagePath('map')].rewind();

            this.parent( x, y, settings );
        },

        update: function(){

            if(this.localized === false) {
                this.currentAnim = this.anims[ig.game.i18n.getLocalizedImagePath('map')].rewind();
                this.localized = true;
            }

            this.parent();

            if (this.first) {
                if(ig.game.gameState.clothesGoalAchieved) {
                     ig.game.spawnEntity( ig.EntityItemGoalClothes, 120, 42 );
                }
                if(ig.game.gameState.presentGoalAchieved) {
                     ig.game.spawnEntity( ig.EntityItemGoalPresent, 116, 54 );
                }
                if(ig.game.gameState.timeGoalAchieved) {
                     ig.game.spawnEntity( ig.EntityItemGoalTime, 109, 66 );
                }
                if(ig.game.gameState.placeGoalAchieved) {
                     ig.game.spawnEntity( ig.EntityItemGoalPlace, 101, 78 );
                }
                if(ig.game.gameState.confirmationGoalAchieved) {
                     ig.game.spawnEntity( ig.EntityItemGoalConfirmation, 93, 92 );
                }
                this.first=false;
            }

            if( ig.input.pressed('click') || ig.input.pressed('Esc') ){

                ig.game.removeEntity( this );
                this.first=true;
            }

            

        }
		
	});

});