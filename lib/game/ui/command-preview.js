ig.module(
    'game.ui.command-preview'
)
.requires(
    'plusplus.core.config',
    'plusplus.ui.ui-text',
    'plusplus.ui.ui-text',
    'game.components.i18n'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Entity that shows a preview of the selected
     * commands e.g "talk to bartender". Part of the Ui.
     *
     * @class
     * @extends ig.UIText
     * @memeberof ig
     */
    ig.CommandPreview = ig.global.CommandPreview = ig.UIText.extend({

        name: 'preview',

        fixed: false,

        posAsPct: false,

        // Default text command
        defaultCommand: null,//ig.game.getEntitiesByClass(ig.CommandWalk)[0],//'Walk',

        // Flag. True on inventory mouse over
        hasDefaultCommandInventory: false,

        // Flag. True if this a combined commando like "use with"
        hasCombinedCommand: false,

        // Flag. True if there is a complete combined command as "use stick with bear"
        hasActiveCompoundableCommand: false,

        // Current activated command
        currentCommand: null,

        // Name of current active entity
        entityName: '',

        // Localized name of current active entity
        localizedEntityName: '',

        // Name of compundable entity name
        compoundableEntityName: '',

        // Text that will be displayed
        text: '',

        font: new ig.Font( _c.PATH_TO_MEDIA + 'command_preview_font_11px.png' ),

        /**
         * Centers the command preview inside the gamescreen.
         * Method needs to be called after the parent reposition
         * method for proper repositioning!
         *
         */
        centerCommandPreview: function(){

            this.pos.x = ( _c.GAME_WIDTH_VIEW / 2 ) - ( this.size.x / 2 );

        },

        /**
         * Detects if the mouse cursor hovers over an entity
         *
         * @returns {boolean} true if entity is in focus
         * @param entity {object} entity to check against.
         */
        entityIsinFocus: function( entity ) {
            return (
                (entity.pos.x <= (ig.input.mouse.x + ig.game.screen.x)) &&
                    ((ig.input.mouse.x + ig.game.screen.x) <= entity.pos.x + entity.size.x) &&
                    (entity.pos.y <= (ig.input.mouse.y + ig.game.screen.y)) &&
                    ((ig.input.mouse.y + ig.game.screen.y) <= entity.pos.y + entity.size.y)
                );
        },

        /**
         * If the mouse hovers over an interactive entity set
         * entityName porperty to that entity name, else set
         * it to an empty string.
         *
         * Does nothing if there is an active command.
         *
         */
        declareEntityName: function(){

            var entities = ig.game.entities;
            var name = '';

            for( var i = 0, len = ig.game.entities.length; i < len; i++ ){

                if( this.entityIsinFocus( entities[i] )
                    && entities[i].name !== 'player'
                    && entities[i].name !== 'cursor'
                    && entities[i].name !== 'command'
                    && entities[i].name !== 'preview'
                    && entities[i].name !== undefined
                    && entities[i].name !== 'spawner-a'
                    && entities[i].name !== 'spawner-b'
                    && entities[i].name !== 'spawner-c'
                    && entities[i].name !== 'textbox'){

                    name = entities[i].name;

                }

            }

            if( !ig.game.commandExecution.hasActiveCommand ){

                this.entityName = name;
                this.localizedEntityName = ig.game.i18n.getItemName(name) || '';

                if(this.levelName !== "" && this.localizedEntityName === "") {
                    this.localizedEntityName = ig.game.i18n.getLevelName(name) || '';
                }

            }

            if( this.hasCombinedCommand && name !== this.entityName && !this.hasActiveCompoundableCommand ){

                this.compoundableEntityName = name;

            }
            else if( !this.hasActiveCompoundableCommand ){

                this.compoundableEntityName = '';

            }

        },

        /**
         * Changes to text for UI display based on the
         * currently selected command and the active entity.
         * Falls back to the default command if no command
         * is selected.
         */
        showCommandPreview: function(){

            if( this.currentCommand === null ){

                this.renderDefaultCommand();

            }
            else {

                this.renderSelectedCommand();

            }

        },

        /**
         * Renders the default command to the center of this UI element.
         */
        renderDefaultCommand: function(){

            if(this.defaultCommand === null) {
                this.defaultCommand = ig.game.getEntitiesByClass(ig.global.CommandWalk)[0];
            }

            this.currentCommand = this.defaultCommand;

            // Assigning a value to this.text will draw the value
            var commandName = ig.game.i18n.getCommandName(this.currentCommand.command);
            this.text = commandName + ' ' + this.localizedEntityName;

        },

        /**
         * Renders a selected command to the center of this UI element.
         */
        renderSelectedCommand: function(){

            var commandName = ig.game.i18n.getCommandName(this.currentCommand.command);

            // Modify command preview on certain commands for proper grammar
            // if( this.currentCommand.command === 'Look' && this.localizedEntityName !== '' ){

            //     this.text = commandName + ' ' + this.localizedEntityName + ' a';

            // }
            // else if( this.currentCommand.command === 'Talk' && this.localizedEntityName !== '' ){

            //     this.text = commandName + ' a ' + this.localizedEntityName;

            // }
            // else{

                this.handleInventoryMouseOverCommand();

            // }

        },

        /**
         * Switch to another default command, if the mouse
         * hovers over an inventory item. Render the normal
         * current command if this is not the case.
         */
        handleInventoryMouseOverCommand: function(){

            

            //TODO: Use look as default command for inventory
            // Show a different default command on inventory items
            // if( this.hasMouseOverInventory() && this.hasDefaultCommandOnActiveEntity() ){

            //     this.currentCommand.command = 'Look';

            //     this.text = this.currentCommand.commandName + ' ' + this.entityName + ' a';

            //     this.hasDefaultCommandInventory = true;

            // }
            // else 

                if( this.hasDefaultCommandInventory ){

                // Assigning a value to this.text will draw the value
                this.currentCommand.command = this.defaultCommand;

                this.text = ig.game.i18n.getCommandName(this.currentCommand.command) + ' ' + this.localizedEntityName;

                this.hasDefaultCommandInventory = false;

            }
            else {

                if( this.hasCombinedCommand ){

                    this.text = ig.game.i18n.getCommandName(this.currentCommand.command) + ' ' + this.localizedEntityName + ' mit ' + this.compoundableEntityName;

                }
                else {

                    // Render the "normal command"
                    this.text = ig.game.i18n.getCommandName(this.currentCommand.command) + ' ' + this.localizedEntityName;

                }

            }

        },

        /**
         * Sets the hasCombinedCommand flag to true or false
         *
         * @param {boolean} state Whether there is an active "use with command"
         */
        setHasCombinedCommand: function( state ){

            this.hasCombinedCommand = state;

        },

        setHasActiveCompoundableCommand: function( state ){

            this.hasActiveCompoundableCommand = state;

        },

        /**
         * Sets entityName property to name
         *
         * @param {string} name Name of entity
         *
         */
        setEntityName: function( name ){

            this.entityName = name;

        },

        /**
         * Sets the currentCommand property to command
         *
         * @param {Object} command instance
         *
         */
        setCurrentCommand: function( command ){

            this.currentCommand = command;

        },

        /**
         * Detect if the player moves the cursor over the inventory space.
         *
         * @returns {boolean} True if mouse hovers over the inventory space.
         */
        hasMouseOverInventory: function(){

            return(
                    ig.input.mouse.y + ig.game.screen.y >= 153
                    && ig.input.mouse.y + ig.game.screen.y <= 185
                    && ig.input.mouse.x + ig.game.screen.x >= 177
                    && ig.input.mouse.x + ig.game.screen.x <= 303
                  );

        },

        /**
         * Returns true on default command and active Entity
         *
         * @returns {boolean}
         */
        hasDefaultCommandOnActiveEntity: function(){

            return( this.currentCommand.command === 'Walk' && this.entityName !== '' );

        },

        update: function(){

            this.parent();

            this.declareEntityName();
            this.showCommandPreview();

            // Execute player commands
            ig.game.commandExecution.execute();

        },

        reposition: function(){

            this.parent();

            this.centerCommandPreview();

        }

	});

});