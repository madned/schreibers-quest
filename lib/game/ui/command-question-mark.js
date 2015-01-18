ig.module(
    'game.ui.command-question-mark'
)
.requires(
    'plusplus.core.config',
    'plusplus.ui.ui-button',
    'game.ui.command',
    'game.entities.item-map',
    'game.components.game-state'
)
.defines(function () {

    var _c  = ig.CONFIG;

    /**
     * QuestionMark.
     *
     * @class
     * @extends ig.Command
     * @memeberof ig
     */
    ig.CommandQuestionMark = ig.global.CommandQuestionMark = ig.Command.extend({

        command: 'ThingsToDo',

        commandName : 'Thing to do',

        name: 'question-mark',

        state: 'off',

        size: {
            x: 20,
            y: 20
        },

        animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'ui/item-question.gif', 20, 20 ),

        /**
         * Handles what do to on a selected command.
         */
        handleCommandInput: function(){
            if( this.state==='off' && ((this.inFocus() && ig.input.pressed('click')) || (ig.input.pressed('Question')))){

                this.state='on';
                 ig.game.spawnEntity( "EntityItemMap", 0, 0 );
                 ig.game.gameState.newGoalAchieved=false;
            } else if( ig.input.pressed('click') || ig.input.pressed('Esc')) {
                this.state='off';
            }
        },


        handleMouseOver: function(){

            if (ig.game.gameState.newGoalAchieved) {
                this.animOverride ('blink');
            }
            else 
                this.inFocus() ? this.animOverride('mouseOver') : this.animOverride('mouseOut');

        }
    });

});