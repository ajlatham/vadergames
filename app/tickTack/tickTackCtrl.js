// INITILIZE CONTROLLER
// ============================================================
angular.module("gameApp").controller("tickTackCtrl", function($scope) {

  // VARIABLES
  // ============================================================


  // FUNCTIONS
  // ============================================================

  var b = jsboard.board({ attach: "game", size: "3x3"});
  b.cell("each").style({width:"150px", height:"150px", background: "lightblue", borderRadius: "15px"});


  var x = jsboard.piece({ text: "X", fontsize: "80px", textAlign: "center"});
  var o = jsboard.piece({ text: "O", fontsize: "80px", textAlign: "center"});

  var turn = true;
  b.cell("each").on("click", function() {
    if(b.cell(this).get()===null) {
      if(turn) { b.cell(this).place(x.clone()); }
      else     { b.cell(this).place(o.clone());  }
      turn = !turn;
    }
  })

});
