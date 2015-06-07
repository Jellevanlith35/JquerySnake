$(document).ready(function () {
    var snake = $(".snake");
    var speed = 1;
    var gameState = {
         Left: 1,
         Right: 2,
         Up: 3,
         Down: 4
    }
    var _gameState = gameState.Right;
    var height = $(".game").height() / 2;
    var width = $(".game").width() / 2;
    snake.css("marginTop",Math.round(height));
    snake.css("marginLeft",Math.round(width));
    moveObject();
    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
                _gameState = gameState.Left;
            break;

            case 38: // up
                _gameState = gameState.Up;
            break;

            case 39: // right
                _gameState = gameState.Right;
            break;

            case 40: // down
                _gameState = gameState.Down;
            break;

            case 13: // down
                alert("test");
            break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

    function moveObject() {
        if(!objectCollision()) {
            if(_gameState == gameState.Left)
                snake.css("marginLeft","-="+speed+"");
            else if(_gameState == gameState.Right)
                snake.css("marginLeft","+="+speed+"");
            else if(_gameState == gameState.Up)
                snake.css("marginTop","-="+speed+"");
            else if(_gameState == gameState.Down)
                snake.css("marginTop","+="+speed+"");
        }
        setTimeout(moveObject,1);
    }

    function objectCollision() {
        $(".zakkenwasser").text(snake.css("marginLeft"));
        var marginLeft = snake.css("marginLeft").replace("px", "");
        var marginTop = snake.css("marginTop").replace("px", "");
        if(marginLeft == 0)
            return true;
        if((marginLeft) == $(".game").width())
            return true;
        if(marginTop == 0)
            return true;
        if(marginTop == $(".game").height())
            return true;

        return false;
    }
});
