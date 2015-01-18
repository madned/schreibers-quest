ig.module(
    'game.components.room-state'
)
.requires(
    'plusplus.core.config',
    'game.entities.item-paperball',
    'game.entities.item-present'
    //'game.entities.item-tphone'
)
.defines(function() {

    "use strict";

    var _c = ig.CONFIG;

    /**
     * Keeps track of the current state of the room
     * and recreates this state on revisiting.
     *
     * @class
     * @extends ig.Class
     * @memeberof ig
     */
    ig.RoomState = ig.Class.extend({

        paperball: {
            className: ig.EntityItemPaperball,
            isPickedUp: false
        },


        present: {
            className: ig.EntityItemPresent,
            isPickedUp: false
        },

        tphone: {
            className: ig.InventoryItemTphone,
            isPickedUp: false
        },

    /*    tphone: {
            matchingInventoryItem: ig.EntityInventoryItemTPhone,
            className: ig.EntityItemPresent,
            isPickedUp: false
        },*/

        /**
         * Creates the current game state
         * based of the item properties.
         */
        createState: function(){

            /* if( !this.paperball.isPickedUp ){
                
                ig.game.inventory.addItem( this.tphone.matchingInventoryItem, this );


                this.TPhone.isPickedUp=true;

            }*/

            var currentLevel = ig.game.currentLevel;

             if( currentLevel === 'study' ){

                if( !this.paperball.isPickedUp ){

                    // spawn lemon
                    ig.game.spawnEntity( this.paperball.className, 192, 92 );

                }

            }


            // On Junkroom
            if( currentLevel === 'sitting-room' ){

                if( !this.present.isPickedUp ){

                    // spawn wrench
                    ig.game.spawnEntity( this.present.className, 186,80 );

                }

            }

        }

    });

});