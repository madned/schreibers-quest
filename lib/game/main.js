ig.module(
    'game.main'
)
.requires(
	// include impact++
    'plusplus.core.plusplus',
    // custom loader
    'game.components.pacloader',
    // player class
    'game.entities.player',
    // titlescreen
    'game.levels.titlescreen',
    // storysceen
    'game.levels.storyscreen',
    // ending
    'game.levels.ending',
    // rooms
    'game.levels.study',
    'game.levels.bedroom',
    'game.levels.kitchen',
    'game.levels.sitting-room',
    // enable debug
    // 'plusplus.debug.debug',
    // command execution
    'game.components.command-execution',
    //i18n
    'game.components.i18n',
    // user interface module
    'game.ui.pacui',
    // inventory
    'game.ui.inventory',
    // room state tracker/creator
    'game.components.room-state',
    'game.components.game-state',
    // conversation module
    'plusplus.entities.conversation',
    'game.entities.textplayer'
)
// define the main module
.defines(function () {

    "use strict";

    // config variable
    var _c = ig.CONFIG;

    //language selected
    var lang = 'ca';

    // Game instance
	var Pac = ig.GameExtended.extend({

        // Background color of canvas
        clearColor: "#000000",

        // Contains the name of the current level
        currentLevel: null,

        hasUntoldBackgroundStory: true,

		init: function () {

			this.parent();

		    // Load starting level
            this.loadLevelDeferred( 'study', 'spawner-a' );

            // Set the language
            this.i18n = new ig.i18n();
            this.i18n.setLanguage(lang);

            // Create new pac user interface instance
            this.gui = new ig.Pacui();

            // Instance room state
            this.roomState = new ig.RoomState();

            this.gameState = new ig.GameState();

            // Instance the inventory
            this.inventory = new ig.Inventory();

            // Cursor Layer
            this.setCursorLayer();

            ig.Sound.useWebAudio = false;
            var theme = new ig.Sound( _c.PATH_TO_MEDIA + 'music/mainTheme.*' );

            theme.play();
		},

        /**
         * Here i override the loadLevelDeferred method, so
         * i can set the currentLevel property. This is needed
         * for spawning/removing game items after the level build.
         *
         * @param level
         * @param playerSpawnerName
         * @override
         */
        loadLevelDeferred: function( level, playerSpawnerName ){

            this.currentLevel = level;

            this.parent( level, playerSpawnerName );

        },

        /**
         * This method creates the level and spawns all
         * the entitys. So any logic for spawning/removing
         * entitys in a certain room goes here after calling
         * parent.
         *
         * @override
         */
        buildLevel: function(){

            this.parent();

            // reposition camera on level switch
            this.centerStaticCamera();

            // Create room state
            this.roomState.createState();

            // Create new command execution instance
            this.commandExecution = new ig.CommandExecution();

            this.inventory.respawnInventoryItems();

        },

        /**
         * Bind all inputs to certain events
         */
        inputStart: function () {

            // Leftclick
            ig.input.bind(ig.KEY.MOUSE1, 'click');

            ig.input.bind(ig.KEY.G, 'Give');
            ig.input.bind(ig.KEY.P, 'Pick up');
            ig.input.bind(ig.KEY.U, 'Use');
            
            ig.input.bind(ig.KEY.O, 'Open');
            ig.input.bind(ig.KEY.L, 'Look');
            ig.input.bind(ig.KEY.S, 'Push');
            
            ig.input.bind(ig.KEY.C, 'Close');
            ig.input.bind(ig.KEY.T, 'Talk');
            ig.input.bind(ig.KEY.Y, 'Pull');

            ig.input.bind(ig.KEY.F1, 'Question');            
            ig.input.bind(ig.KEY.ESC, 'Esc');     

            ig.input.bind(ig.KEY.ENTER, 'pw');
            ig.input.bind(ig.KEY.Q, 'score');
        },

        /*
         * Tells the Backgroundstory on startup.
         */
        tellBackgroundStory: function(){

            var textbubble = ig.game.spawnEntity(ig.EntityConversation, 0, 0);

            textbubble.messageMoveToSettings = {
                matchPerformance: true,
                offset: {
                    x: 0,
                    y: -30
                },
                align: {
                    x: 0.5,
                    y: 1
                }
            };

            // textbubble.addStep( 'Mira Joan, he apres a crear una habitacio nova ...', 'player', 1);
            // textbubble.addStep( 'Encara no funciona massa be, pero...', 'player', 2 );
            // textbubble.addStep( 'Ja entenc lo basic!', 'player', 3 );
            // textbubble.addStep( 'Aviat sera molt xulo aixo!', 'player', 4 );


            // textbubble.trigger();

        },

        /**
         * Shows the end of the game.
         */
        showEnding: function(){

            ig.system.setGame( TheEnd );

        },

        /**
         * Add a new Layer for the cursor to
         * the game which is above all other layer
         */
        setCursorLayer: function(){

            this.addLayer( new ig.Layer('cursor', {
                zIndex: _c.Z_INDEX_ABOVE_ALL
            }));

        },

        /**
         * Centers camera on gamescreen when
         * the game runs in fullscreen mode
         */
        centerStaticCamera : function(){

            // Reset screen position for
            // proper positioning on resize
            ig.game.screen.x = 0;
            ig.game.screen.y = 0;

            // Calculate new screen position
            ig.game.screen.x -= ( ig.system.realWidth / 2 ) / ig.system.scale - ( _c.GAME_WIDTH_VIEW / 2 );
            ig.game.screen.y -= ( ig.system.realHeight / 2 ) / ig.system.scale - ( _c.GAME_HEIGHT_VIEW / 2 );

        },

        resize : function(){

            this.parent();

            // Check for game instance
            if( ig.game !== null ){

                // Center camera on gamescreen
                this.centerStaticCamera();

            }

        },

        update: function(){

            this.parent();

            if( this.hasUntoldBackgroundStory ){

                this.tellBackgroundStory();

                this.hasUntoldBackgroundStory = false;

            }

            // Sort entities to avoid zIndex bugs
            ig.game.sortEntities('entities');

        }

	});

    var StoryScreen = ig.GameExtended.extend({
        clearColor: "#000000",

        init: function() {
            this.parent();
            this.setCursorLayer();
            this.loadLevelDeferred('storyscreen');

            // Set the language
            this.i18n = new ig.i18n();
            this.i18n.setLanguage(lang);
            
            var text = ig.game.i18n.getMessage('introText');
            var textbubble = ig.game.spawnEntity(ig.EntityTextplayer, 0, 0, {textString : text});
        },

        /**
         * Bind all inputs to certain events
         */
        inputStart: function () {

            // Leftclick
            ig.input.bind(ig.KEY.MOUSE1, 'click');

        },

        /**
         * Add a new Layer for the cursor to
         * the game which is above all other layer
         */
        setCursorLayer: function(){

            this.addLayer( new ig.Layer('cursor', {
                zIndex: _c.Z_INDEX_ABOVE_ALL
            }));

        },

        /**
         * Centers camera on gamescreen when
         * the game runs in fullscreen mode
         */
        centerStaticCamera : function(){

            // Reset screen position for
            // proper positioning on resize
            ig.game.screen.x = 0;
            ig.game.screen.y = 0;

            // Calculate new screen position
            ig.game.screen.x -= ( ig.system.realWidth / 2 ) / ig.system.scale - ( _c.GAME_WIDTH_VIEW / 2 );
            ig.game.screen.y -= ( ig.system.realHeight / 2 ) / ig.system.scale - ( _c.GAME_HEIGHT_VIEW / 2 );

        },

        resize : function(){

            this.parent();

            // Check for game instance
            if( ig.game !== null ){

                // Center camera on gamescreen
                this.centerStaticCamera();

            }

        },

        update: function(){

            this.parent();

            if( ig.input.pressed('click') ){

                
                        
                       
                        ig.system.setGame( Pac );
            }

        }
    });

    // Titlescreen instance
    var Titlescreen = ig.GameExtended.extend({

        // Background color of canvas
        clearColor: "#000000",

        init: function () {

            this.parent();

            // Cursor Layer
            this.setCursorLayer();

            // Load Titlescreen
            this.loadLevelDeferred( 'titlescreen' );

            // Play title theme
            ig.Sound.useWebAudio = false;
            var theme = new ig.Sound( _c.PATH_TO_MEDIA + 'music/introTheme.*' );

            theme.play();

        },

        /**
         * Bind all inputs to certain events
         */
        inputStart: function () {

            // Leftclick
            ig.input.bind(ig.KEY.MOUSE1, 'click');

        },

        /**
         * Add a new Layer for the cursor to
         * the game which is above all other layer
         */
        setCursorLayer: function(){

            this.addLayer( new ig.Layer('cursor', {
                zIndex: _c.Z_INDEX_ABOVE_ALL
            }));

        },

        /**
         * Centers camera on gamescreen when
         * the game runs in fullscreen mode
         */
        centerStaticCamera : function(){

            // Reset screen position for
            // proper positioning on resize
            ig.game.screen.x = 0;
            ig.game.screen.y = 0;

            // Calculate new screen position
            ig.game.screen.x -= ( ig.system.realWidth / 2 ) / ig.system.scale - ( _c.GAME_WIDTH_VIEW / 2 );
            ig.game.screen.y -= ( ig.system.realHeight / 2 ) / ig.system.scale - ( _c.GAME_HEIGHT_VIEW / 2 );

        },

        resize : function(){

            this.parent();

            // Check for game instance
            if( ig.game !== null ){

                // Center camera on gamescreen
                this.centerStaticCamera();

            }

        },

        update: function(){

            this.parent();

            if( ig.input.pressed('click') ){

                var entities           = ig.game.entities;
                // iterate over all entitys. set isAbort
                // to false if one entity is found, or
                // that entity is an levelchange entity
                for( var i = 0, len = ig.game.entities.length; i < len; i++ ){

                    if( this.entityIsinFocus( entities[i] )
                        && entities[i].name !== 'player'
                        && entities[i].name !== 'cursor'
                        && entities[i].name !== 'langSelector'){

                        console.log(entities[i].name + ' pressed');

                        ig.game.i18n = new ig.i18n();
                        if(entities[i].name === "langEnglish") {
                            lang = 'en';
                        } else if(entities[i].name === "langSpanish") {
                            lang = 'es';
                        }
                        
                       
                        ig.system.setGame( StoryScreen );
                    }

                }

                

            }

        }, 



        /**
         * Detects if the mouse cursor hovers over an entity
         *
         * @returns {boolean} true if entity is in focus
         * @param entity {object} entity to check against
         */
        entityIsinFocus: function( entity ) {
            return (
                (entity.pos.x <= (ig.input.mouse.x + ig.game.screen.x)) &&
                    ((ig.input.mouse.x + ig.game.screen.x) <= entity.pos.x + entity.size.x) &&
                    (entity.pos.y <= (ig.input.mouse.y + ig.game.screen.y)) &&
                    ((ig.input.mouse.y + ig.game.screen.y) <= entity.pos.y + entity.size.y)
                );
        }

    });

    // instance the end :O
    var TheEnd = ig.GameExtended.extend({

        // Background color of canvas
        clearColor: "#000000",

        init: function() {
            this.parent();
            //this.setCursorLayer();
            this.loadLevelDeferred('ending');

            // Set the language
            this.i18n = new ig.i18n();
            this.i18n.setLanguage(lang);
            
            var text = ig.game.i18n.getMessage('ending');
            var textbubble = ig.game.spawnEntity(ig.EntityTextplayer, 0, 0, {textString : text});

            ig.Sound.useWebAudio = false;
            var theme = new ig.Sound( _c.PATH_TO_MEDIA + 'music/marryTheme.*' );

            theme.play();
        },

        /**
         * Centers camera on gamescreen when
         * the game runs in fullscreen mode
         */
        centerStaticCamera : function(){

            // Reset screen position for
            // proper positioning on resize
            ig.game.screen.x = 0;
            ig.game.screen.y = 0;

            // Calculate new screen position
            ig.game.screen.x -= ( ig.system.realWidth / 2 ) / ig.system.scale - ( _c.GAME_WIDTH_VIEW / 2 );
            ig.game.screen.y -= ( ig.system.realHeight / 2 ) / ig.system.scale - ( _c.GAME_HEIGHT_VIEW / 2 );

        },

        resize : function(){

            this.parent();

            // Check for game instance
            if( ig.game !== null ){

                // Center camera on gamescreen
                this.centerStaticCamera();

            }

        }

    });

    // Start up game
	ig.main(
		'#canvas',
        Titlescreen,
        60,
		_c.GAME_WIDTH,
		_c.GAME_HEIGHT,
		_c.SCALE,
        ig.pacLoader
	);
	
});
