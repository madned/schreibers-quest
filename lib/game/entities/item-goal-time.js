ig.module(
    'game.entities.item-goal-time'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config',
    'game.components.game-state'
)

.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * GoalTime.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityItemGoalTime = ig.global.EntityItemGoalTime = ig.EntityExtended.extend({

        name: 'goal time',

        _wmScalable: true,

        collides: ig.Entity.COLLIDES.NEVER,

		size: {
            x: 10,
            y: 10
        },

        pos: {
            x: 120,
            y: 42
        },

        zIndex: _c.Z_INDEX_ABOVE_PLAYER,

        animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'tic.png', 10, 10 ),

        animInit: 'idle',

        animSettings: {
            idle: {
                frameTime: 1,
                sequence: [0]
            }
        },

        update: function(){

            this.parent();


            if( ig.input.pressed('click') || ig.input.pressed('Esc') ){

                ig.game.removeEntity( this );
            }

            

        }
		
	});

});