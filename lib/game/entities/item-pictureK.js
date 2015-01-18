ig.module(
    'game.entities.item-pictureK'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * PictureK.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityItemPictureK = ig.global.EntityItemPictureK = ig.EntityExtended.extend({

        name: 'pictureK',

        _wmScalable: true,

        collides: ig.Entity.COLLIDES.NEVER,

		size: {
            x: 14,
            y: 12
        },

        persistent: true,

        state: 'full',

        clicks: 0,

        // At which distance interaction should be triggered
        interactionDistance: 40,

        interact: function( command ){
         if( command.command === 'Look'){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('lookPictureK1'));
            }
            else if( command.command === 'Use' ){
                    if (this.clicks>4) {
                         ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultPictureK1'));
                    }
                    else ig.game.getPlayer().speak(ig.game.i18n.getMessage('usePictureK1')); 
                    this.clicks++;
            }
            else if( command.command === 'Give' ){
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('givePictureK1')); 
            }
            else if( command.command === 'Push' ){
                    if (this.clicks>4) {
                         ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultPictureK1'));
                    } 
                    else ig.game.getPlayer().speak(ig.game.i18n.getMessage('pushPictureK1')); 
                    this.clicks++;
            }
            else if( command.command === 'Pick up' ){
                    if (this.clicks>4) {
                         ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultPictureK1'));
                    } 
                    else ig.game.getPlayer().speak(ig.game.i18n.getMessage('pickupPictureK1')); 
                    this.clicks++;
            }
            else if( command.command === 'Pull' ){
                    if (this.clicks>4) {
                         ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultPictureK1'));
                    } 
                    else ig.game.getPlayer().speak(ig.game.i18n.getMessage('pullPictureK1')); 
                    this.clicks++;
            }
            else if( command.command === 'Open' ){
                    if (this.clicks>4) {
                         ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultPictureK1'));
                    } 
                    else ig.game.getPlayer().speak(ig.game.i18n.getMessage('openPictureK1')); 
                    this.clicks++;
            }
            else if( command.command === 'Close' ){
                    if (this.clicks>4) {
                         ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultPictureK1'));
                    } 
                    else ig.game.getPlayer().speak(ig.game.i18n.getMessage('closePictureK1')); 
                    this.clicks++;
            }
            else if( command.command === 'Talk' ){
                   ig.game.getPlayer().speak(ig.game.i18n.getMessage('talkPictureK1'));
            }
            else {
                    ig.game.getPlayer().speak(ig.game.i18n.getMessage('defaultPictureK1'));
            }


        }		
	});

});