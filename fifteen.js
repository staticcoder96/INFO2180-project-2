/*I added the extra feature of Game time*/

var emptyX = 300;
var emptyY = 300;
var  MOVES = 0;
var TIMES_TRIED = 0;

document.addEventListener("DOMContentLoaded", function() { 
	var playing = false;
	
	var n;


	
    document.getElementById("puzzlearea").className = "puzzlepiece";
	var piecesArray = document.querySelectorAll("#puzzlearea > div"); 
	var pieces = document.querySelectorAll("#puzzlearea > div");
	var col = document.getElementById("puzzlearea");
    Setup(pieces); //call Setup()     
    shuffle(piecesArray); //call shuffle()
    //check(pieces);	//call check function
	Complete(pieces); //call Complete function

	




//Arranges the puzzle from 1 -15 with an empty slot.
function Setup(p){
	var left = 0;
	var top = 0;


	for (var i = 0; i < p.length; i++){ 
		if (left ==400) {
			left = 0;
			top += 100;	
		}
		p[i].style.left = left.toString()+"px";
		p[i].style.top =  top + "px";
		if(!playing){
			p[i].style.backgroundPosition = "-"+left+"px -" +top+  "px"; // Adjusts the background position
		}
		left+=100;
		if(!playing){
			p[i].className = "puzzlepiece";
		}		
		
		}

	}

	/*Moves the pieces*/
	//console.log("here: " + pieces[0].innerHTML); 
  for (var i = 0; i < pieces.length; i++) { 

  	pieces[i].addEventListener("click", function () { 

         var res = check([this.style.left, this.style.top]); 
         switch (res) { 
             case 1: 
                 this.style.top = Number(this.style.top.slice(0, -2)) + 100 + "px";
                 MOVES++; 
                 TIMES_TRIED++;
                 break; 
             case 2:
             	  this.style.top = Number(this.style.top.slice(0, -2)) - 100 + "px";
             	  MOVES++;
             	  TIMES_TRIED++;
             	  break;
             case 3:
             	  this.style.left = Number(this.style.left.slice(0, -2)) +100 + "px";
             	  MOVES++;
             	  TIMES_TRIED++;
             	  break;
             case 4:
             	  this.style.left = Number(this.style.left.slice(0, -2)) - 100 + "px";	
             	  MOVES++;
             	  TIMES_TRIED++;             	    	      

            default: 
                 console.log("event switch error."); 
                 break; 
         }
     });
 }

/* Shuffle the puzzle pieces*/
	function shuffle(p){ 
		
		
		var newArray = [];

		for(var x = 0; x<p.length;x++){
			newArray.push(p[x]);
		}
		console.log(newArray);

		var shuffle = document.getElementById("shufflebutton");
		shuffle.addEventListener("click", function(){ 
		for(var s = 0; s < newArray.length; s++){ 
				do{
					var ran  = Math.floor(Math.random() * pieces.length);
				
				} 
				while (ran == s);

				var temp = newArray[s];
				newArray[s] = newArray[ran];
				newArray[ran]= temp;				
			}

			playing = true; 

			Setup(newArray); 
			var begin = new Date();

			n = begin.getSeconds();
			MOVES; 


			

});





		}
		




	


	//check if piece can move
function check(pos) { // only accepts numbers
     var var1 = pos[0].slice(0, -2); 
     var var2 = pos[1].slice(0, -2); 
     var counter = 0;

     console.log(pos[0]);
     console.log(pos[1]);

     var1 = Number(var1); 
     var2 = Number(var2); 
     var result; 
     do{ 
         if ((var1 + 100) == emptyX && (var2) == emptyY) { //moves tiles right
         	console.log(" case 1");
             result = 1; 
             break; 
         } 
         if ((var1 - 100) == emptyX && (var2) == emptyY) { //moves tiles left
         	console.log(" case 2");
             result = 2; 
             break; 
         } 
         if ((var1) == emptyX && (var2 - 100) == emptyY) { // moves down
         	console.log(" case 3");
             result = 3; 
             break; 
         } 
         if ((var1) == emptyX && (var2 + 100) == emptyY) { // moves up
         	console.log(" case 4");
             result = 4; 
             break; 
         } 
         counter++;
     } while (counter < 4); 
 
 
     return result; 
 } 
 
 


/*Add class to movable pieces*/
function move(c){ 
		for(var x = 0; x < c.length; x++){
		c[x].setAttribute("class","movablepiece");
  		console.log("work!!");
  		console.log(x);

	}

	
}




/*Checks to see that the puzzle is completed*/
	function Complete(com){
		var done = false;
		top = 0;
		left = 0;

		for(var x = 0; x<pieces.length;x++){ 
			if (com[x].style.left == left && com[x].style.top == top){
				done = true;
				Time();
			}
			else {
				done = false;
			} 
			
		}

	}//end of Complete() 

//Time taken to complete the puzzle
	function Time(){
		var stop = new Date();
		var s = stop.getSeconds();
		var tim = (n - s);
		var Duration;
		var newScores;

		Duration = "Number Of Moves Made : " + MOVES + " " + "Time Taken : " + tim +  "seconds";
	    newScore = "Tries = " + TIMES_TRIED + " " + "and" + " "+ MOVES +" "+ "moves in" + tim + "seconds"; 
	    Duration.innerHTML;
	    newScore.innerHTML;
	    console.log(Duration);
	    console.log(newScore);

	}

		

});

	




