/*I added the extra feature of Game time*/

document.addEventListener("DOMContentLoaded", function() { 
	var playing = false;
	const MOVES = 0;
	const TIMES_TRIED = 0;


	
    document.getElementById("puzzlearea").className = "puzzlepiece";
	var piecesArray = document.querySelectorAll("#puzzlearea > div"); 
	var pieces = document.querySelectorAll("#puzzlearea > div");
    Setup(pieces); //call Setup() 


    
    shuffle(piecesArray); //call shuffle()

     check(pieces);	
	Complete(pieces);




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
	console.log("here: " + pieces[0].innerHTML); 
  for (var i = 0; i < pieces.length; i++) { 
     pieces[i].addEventListener("click", function () { 
         var res = check([this.style.left, this.style.top]); 
         switch (res) { 
             case 1: 
                 this.style.top = Number(this.style.top.slice(0, -2)) + 100 + "px";
                 MOVES++; 
                 break; 
             case 2:
             	  this.style.top = Number(this.style.top.slice(0, -2)) - 100 + "px";
             	  MOVES++;
             	  break;
             case 3:
             	  this.style.left = Number(this.style.left.slice(0, -2)) +100 + "px";
             	  MOVES++;
             	  break;
             case 4:
             	  this.style.left = Number(this.style.left.slice(0, -2)) - 100 + "px";	
             	  MOVES++;             	    	      

            default: 
                 console.log("event switch error."); 
                 break; 
         }
     });
 }




/* Shuffle the puzzle pieces*/
	function shuffle(pieces){ 
		var count = pieces.length;
		
		//var s = 0;
		
		var newArray = [];

		for(var x = 0; x<pieces.length;x++){
			newArray.push(pieces[x]);
		}
		console.log(newArray);
		var shuffle = document.getElementById("shufflebutton");
		shuffle.addEventListener("click", function(){ 
			while (count > 0 ) {
				var ran  = Math.floor(Math.random() * count);
				count--;
				var temp = newArray[count];
				newArray[count]= newArray[ran];
				newArray[ran] = temp;				
			}
									
			playing = true ;
			Setup(newArray);

			});
			var begin = new Date();
			var n = begin.getSeconds();
			MOVES;

		}
	


	//check if piece can move
function check(pos) { 
     var var1 = pos[0].slice(0, -2); 
     var var2 = pos[1].slice(0, -2); 
     var counter = 0;

     console.log(pos[0]);
     var1 = Number(var1); 
     var2 = Number(var2); 
     empx = 300;
     empy = 300;
     var result; 
     do{ 
         if ((var1 + 100) == empx && (var2) == empy) { 
             result = 1; 
             break; 
         } 
         if ((var1 - 100) == empx && (var2) == empy) { 
             result = 2; 
             break; 
         } 
         if ((var1) == empx && (var2 - 100) == empy) { 
             result = 3; 
             break; 
         } 
         if ((var1) == empx && (var2 + 100) == empy) { 
             result = 4; 
             break; 
         } 
         counter++;
     } while (counter < 4); 
 
 
     return result; 
 } 
 
 


/*Add class to movaable pieces*/
function move(){
	if((check($(this)) == 1 || 2||3||4)){
		$(this).addClass("movablepiece");
	}
	else {
		$(this).removeClass("movablepiece");
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

		Duration.innerHTML = "Number Of Moves Made : " +MOVES + "Time Taken : " +tim + "seconds";
	    newScores.innerHTML = "Tries = " +TIMES_TRIED + "and" + MOVES + "moves in" + tim + "seconds"; 
	}

		

});

	




