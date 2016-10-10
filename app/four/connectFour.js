var b = jsboard.board({attach: "game", size: "6x7"});
b.style({borderSpacing: "2px"});
b.cell("each").style({width: "70px", height: "70px", background: "#lightblue", border: "1px solid #6A5ACD", borderRadius: "3px"});


var red = jsboard.piece({text:"R", textIndent:"-9999px", background: "url('./red.png') no-repeat", width: "50px", height: "50px", margin: "0 auto" });
var black = jsboard.piece({text:"R", textIndent:"-9999px", background: "url('./black.png') no-repeat", width: "50px", height: "50px", margin: "0 auto" });



var turn = true;
for (var c=0; c<b.cols(); c++) {
	b.cell([0,c]).on("click", function() {
		if (turn) 	dropPiece(b.cell(this).where(), red.clone());
		else 		dropPiece(b.cell(this).where(), black.clone());
		turn = !turn;
	});
}
function dropPiece(where, piece) {
 var colClicked = where[1];
 var colBottom = b.rows()-1;
 var check = b.cell([colBottom,colClicked]).get();
 while ((check!=null)&&(colBottom!=-1)) {
   colBottom -= 1;
   check = b.cell([colBottom,colClicked]).get();
 }
 if (check==null)
   b.cell([colBottom,colClicked]).place(piece);
}
