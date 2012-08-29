exports.TicTacToe = function() {
    var grid = [[],[],[]];
    var lastPlayer = 'O';
    
    var nextPlayer = function() {
        if(lastPlayer == 'O') {
            lastPlayer = 'X';
            return lastPlayer;
        } else {
            lastPlayer = 'O';
            return lastPlayer;
        }
    }
    
    var won = function() {
        for(y = 0; y < 3; y++) {
            if(grid[y][0] == lastPlayer && grid[y][1] == lastPlayer && grid[y][2] == lastPlayer ) {
                  return lastPlayer + ' won';
            }
        }
        
        for(x = 0; x < 3; x++) {
            if(grid[0][x] == lastPlayer && grid[1][x] == lastPlayer && grid[2][x] == lastPlayer ) {
                  return lastPlayer + ' won';
            }
        }
        
        if(grid[0][0] == lastPlayer && grid[1][1] == lastPlayer && grid[2][2] == lastPlayer ) {
              return lastPlayer + ' won';
        }
        
        if(grid[2][0] == lastPlayer && grid[1][1] == lastPlayer && grid[0][2] == lastPlayer ) {
               return lastPlayer + ' won';
         }
        
        return 'noone won';
    }
    
    return {
        move: function(coordinates) {
            grid[coordinates.y][coordinates.x] = nextPlayer();
            return won();
        }
    }
};

