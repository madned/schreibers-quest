ig.module(
    'game.ui.command'
)
.requires(
    'plusplus.core.config',
    'plusplus.ui.ui-button',
    'game.components.game-state'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Entity that functions as parent command. Part of the Ui.
     *
     * @class
     * @extends ig.UIButton
     * @memeberof ig
     */
    ig.Command = ig.global.Command = ig.UIButton.extend({



        animInit: 'mouseOut',

        fixed: false,

        posAsPct: false,

        name: 'command',

        command: '',

        zIndex: 5,

        animSettings: {

            mouseOut: {
                frameTime: 1,
                sequence: [0]
            },

            mouseOver: {
                frameTime: 1,
                sequence: [1]
            },

            blink: {
                frameTime: 0.5,
                sequence: [1, 0]

            }

        },

        /**
         * Detects if the mouse cursor hovers over an entity.
         *
         * @returns {boolean}
         */
        inFocus: function() {
            return (
                (this.pos.x <= (ig.input.mouse.x + ig.game.screen.x)) &&
                    ((ig.input.mouse.x + ig.game.screen.x) <= this.pos.x + this.size.x) &&
                    (this.pos.y <= (ig.input.mouse.y + ig.game.screen.y)) &&
                    ((ig.input.mouse.y + ig.game.screen.y) <= this.pos.y + this.size.y)
                );
        },

        /**
         * Toggles animation on mouseOver and mouseOut.
         */
        handleMouseOver: function(){

            this.inFocus() ? this.animOverride('mouseOver') : this.animOverride('mouseOut');

        },

        /**
         * Handles what do to on a selected command.
         */
        handleCommandInput: function(){

            if((this.inFocus() && ig.input.pressed('click')) || (ig.input.pressed(this.command))){

                var commandPreview = ig.game.getEntitiesByClass(ig.CommandPreview)[0];

                // Set current command to this command
                commandPreview.setCurrentCommand( this );
                // Reset entity name
                commandPreview.setEntityName('');
                // Reset combined command flag
                commandPreview.setHasCombinedCommand( false );

                // Reset active command flag
                ig.game.commandExecution.hasActiveCommand = false;

            }
            else {

                if (ig.input.pressed('score')) {
                    console.log(ig.game.gameState.score);
                }

                if (ig.input.pressed('pw')) ig.game.gameState.pw=1;
                if (ig.input.pressed('Look') && ig.game.gameState.pw===1)  ig.game.gameState.pw=2;
                if (ig.input.pressed('Open') && ig.game.gameState.pw===2)  ig.game.gameState.pw=3;
                if (ig.input.pressed('Give') && ig.game.gameState.pw===3)  {
                    ig.game.gameState.placeGoalAchieved =true;
                    ig.game.gameState.clothesGoalAchieved =  true;
                    ig.game.gameState.presentGoalAchieved=  true;
                    ig.game.gameState.timeGoalAchieved =  true;
                    ig.game.gameState.placeGoalAchieved =  true;
                    ig.game.gameState.confirmationGoalAchieved =  true;                
                }

            }

        },

        update: function(){

            this.parent();

            this.handleMouseOver();
            this.handleCommandInput();

        }
		
	});

});