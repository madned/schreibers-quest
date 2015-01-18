ig.module(
    'game.entities.select-language'
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
    ig.EntitySelectLanguage = ig.global.EntitySelectLanguage = ig.EntityExtended.extend({

        name: 'langSelector',

		size: {
            x: 125,
            y: 11
        },
		
		animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'select-language.gif', 125, 11 ),

        animInit: 'blink',

		animSettings: {
            blink: {
                frameTime: 0.9,
                sequence: [0,1]
            }
		}
		
	});

});