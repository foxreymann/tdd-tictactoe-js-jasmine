var TicTacToe = require('../a').TicTacToe;

describe("ticTacToe", function() {
    it("checks if no one won after first move", function() {
        var ticTacToe = TicTacToe(); 
        expect(ticTacToe.move({'x':1,'y':1})).toEqual('noone won');
    });

    it("checks if crosses won after putting 3 crosses on first row", function() {
          var ticTacToe = TicTacToe();
          ticTacToe.move({'x':0,'y':0})
          ticTacToe.move({'x':1,'y':1})
          ticTacToe.move({'x':1,'y':0})
          ticTacToe.move({'x':1,'y':2})                    
          expect(ticTacToe.move({'x':2,'y':0})).toEqual('X won');
      });
      
      it("checks if crosses won after putting 3 crosses on second row", function() {
            var ticTacToe = TicTacToe();
            ticTacToe.move({'x':0,'y':1})
            ticTacToe.move({'x':1,'y':0})
            ticTacToe.move({'x':1,'y':1})
            ticTacToe.move({'x':0,'y':0})                    
            expect(ticTacToe.move({'x':2,'y':1})).toEqual('X won');
        });
        
        it("checks if crosses won after putting 3 crosses on third row", function() {
              var ticTacToe = TicTacToe();
              ticTacToe.move({'x':0,'y':2})
              ticTacToe.move({'x':1,'y':0})
              ticTacToe.move({'x':1,'y':2})
              ticTacToe.move({'x':0,'y':0})                    
              expect(ticTacToe.move({'x':2,'y':2})).toEqual('X won');
          });
          
          it("checks if noughts won after putting 3 noughts on first row", function() {
                var ticTacToe = TicTacToe();
                ticTacToe.move({'x':1,'y':1})
                ticTacToe.move({'x':0,'y':0})
                ticTacToe.move({'x':2,'y':2})
                ticTacToe.move({'x':1,'y':0})                    
                ticTacToe.move({'x':0,'y':2})                    
                expect(ticTacToe.move({'x':2,'y':0})).toEqual('O won');
            });
            
            it("checks if noughts won after putting 3 noughts on first column", function() {
                   var ticTacToe = TicTacToe();
                   ticTacToe.move({'x':1,'y':0}) // X
                   ticTacToe.move({'x':0,'y':0}) // O
                   ticTacToe.move({'x':2,'y':2})
                   ticTacToe.move({'x':0,'y':1})                    
                   ticTacToe.move({'x':2,'y':0})                
                   expect(ticTacToe.move({'x':0,'y':2})).toEqual('O won');
               });
               
               it("checks if crosses won after putting 3 crosses along the diagonal", function() {
                       var ticTacToe = TicTacToe();
                       ticTacToe.move({'x':0,'y':0}) // X
                       ticTacToe.move({'x':0,'y':1}) // O
                       ticTacToe.move({'x':1,'y':1})
                       ticTacToe.move({'x':0,'y':2})                    
                       expect(ticTacToe.move({'x':2,'y':2})).toEqual('X won');
                   });
                   
                   it("checks if crosses won after putting 3 crosses along the anti diagonal", function() {
                           var ticTacToe = TicTacToe();
                           ticTacToe.move({'x':2,'y':0}) // X
                           ticTacToe.move({'x':0,'y':0}) // O
                           ticTacToe.move({'x':1,'y':1})
                           ticTacToe.move({'x':0,'y':1})                    
                           expect(ticTacToe.move({'x':0,'y':2})).toEqual('X won');
                       });

});
