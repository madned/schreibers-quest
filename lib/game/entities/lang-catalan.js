ig.module(
    'game.entities.lang-catalan'
)
.requires(
    'plusplus.core.entity',
    'plusplus.core.config'
)
.defines(function () {

	var _c  = ig.CONFIG;

    /**
     * Start entity displays an blinking text on the titlescreen.
     *
     * @class
     * @extends ig.EntityExtended
     * @memeberof ig
     */
    ig.EntityLangCatalan = ig.global.EntityLangCatalan = ig.EntityExtended.extend({

		size: {
            x: 57,
            y: 9
        },
		
		animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'lang-catalan.gif', 57, 9 )
        ,

        animInit: 'blink',

		animSettings: {
            blink: {
                frameTime: 0.9,
                sequence: [0]
            }
		}
		
	});

});