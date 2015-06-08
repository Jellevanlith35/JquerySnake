$(document).ready(function () {
    var snake = $(".snake");
    var food = $(".food");
    createFood();
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
        // if(collision(snake, food)) {
        //     alert( "test");
        // }
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

    function createFood() {
        var x = Math.floor((Math.random() * $(".game").width()) + 1);
        var y = Math.floor((Math.random() * $(".game").height()) + 1);
        food.css("marginLeft",x);
        food.css("marginTop",y);
        alert(x);
    }

    // function snakeCollisionWithFood() {
    //     var marginLeftSnake = snake.css("marginLeft").replace("px", "");
    //     var marginTopSnake = snake.css("marginTop").replace("px", "");
    //     var marginLeftFood = food.css("marginLeft").replace("px", "");
    //     var marginTopFood = food.css("marginTop").replace("px", "");
    //     for(var x = marginLeftSnake; x <= marginLeftSnake+10; x++) {
    //         for(var y = marginTopSnake; y <= marginTopSnake+10; y++) {
    //             console.log("x " + x + "y " + y);
    //             if(x == marginLeftFood && y == marginTopFood)
    //                 alert("test");
    //         }
    //     }
    //     // if(marginLeftSnake == marginLeftFood && marginTopSnake == marginTopFood)
    //     //     alert("test");
    // }

    function collision(div1, div2) {
        // var rect1 = document.getElementByClass("snake").getBoundingClientRect();
        // var rect2 = document.getElementByClass("food").getBoundingClientRect();
      var overlap = !((div1.offsetLeft + div1.offsetWidth) < div2.offsetLeft || 
                div1.offsetLeft > (div2.offsetLeft + div2.offsetWidth) || 
                (div1.offsetTop + div1.offsetHeight) < div2.offsetTop || 
                div1.offsetTop > (div2.offsetTop + div2.offsetHeight))

      return overlap;
    }
});
