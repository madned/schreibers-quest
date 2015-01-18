ig.module(
    'game.components.game-state'
)
.requires(
    'plusplus.core.config'
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
    ig.GameState = ig.Class.extend({

        pw:0,
        score:0,

        clothesGoalAchieved : false,
        presentGoalAchieved: false,
        timeGoalAchieved : false,
        placeGoalAchieved : false,
        confirmationGoalAchieved : false,
        newGoalAchieved : false
    });

});