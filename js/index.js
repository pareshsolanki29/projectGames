$('document').ready(function(){
  //default players turn to x
  var turn = "X";
  //array stores values that we will check later for winner
  var turns = ["#","#","#","#","#","#","#","#","#"];
  //default computer turn
  var computersTurn = "O";
  //keeps track if it is the computers turn
  var gameOn = false;
  //keeps track of computers turn so no loop
  var count = 0;
  //change players turn to X and computers turn to O
  $('#turnX').click(function(){
    turn ="X";
    computersTurn ="O";
    $('#turnO').removeClass("btn-primary");
    $('#turnX').addClass("btn-primary");
    reset();
  });
  //change players turn to O and computers turn to X
    $('#turnO').click(function(){
    turn ="O";
    computerTurn ="X";
    $('#turnX').removeClass("btn-primary");
    $('#turnO').addClass("btn-primary");
      reset();
  });
  
  function winCondition(turnArray, currentTurn){
    if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2]===currentTurn){
      gameOn= true;
      reset();
      alert("Player"+ currentTurn +"wins!(Top row across 0,1 and 2 spots)");
    } else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6]===currentTurn){
      gameOn= true;
      reset();
      alert("Player"+ currentTurn +"wins!(Top row across 2,4 and 6 spots)");
    }
    else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5]===currentTurn){
      gameOn= true;
      reset();
      alert("Player"+ currentTurn +"wins!(Top row across 3,4 and 5 spots)");
    }
    else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8]===currentTurn){
      gameOn= true;
      reset();
      alert("Player"+ currentTurn +"wins!(Top row across 6,7 and 8 spots)");
    }
    else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8]===currentTurn){
      gameOn= true;
      reset();
      alert("Player"+ currentTurn +"wins!(Top row across 0,4 and 8 spots)");
    }
    else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6]===currentTurn){
      gameOn= true;
      reset();
      alert("Player"+ currentTurn +"wins!(Top row across 0,3 and 8 spots)");
    }
    else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7]===currentTurn){
      gameOn= true;
      reset();
      alert("Player"+ currentTurn +"wins!(Top row across 1,4 and 7 spots)");
    }
    else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8]===currentTurn){
      gameOn= true;
      reset();
      alert("Player"+ currentTurn +"wins!(Top row across 2,5 and 8 spots)");
    }
    else{
      gameOn = false;
    }
    
  }
  function computerTurn(){
    //used go break while loop 
    var taken = false;
    while(taken===false && count !== 5){
      //generate computers random turn
      var computersMove = (Math.random()*10).toFixed();
      var move =$('#'+computersMove).text();
      if(move === "#"){
        $('#'+computersMove).text(computersTurn);
        
        taken = true;
        turns[computersMove]= computersTurn;
      }
    }
  }
  
  function playerTurn(turn, id){
    var spotTaken = $('#'+id).text();
    if (spotTaken === "#"){
      count++;
      turns[id]= turn;
      $('#'+id).text(turn);
      winCondition(turns, turn);
      if (gameOn === false){
        computerTurn();
        winCondition(turns, computersTurn);
      }
    }
  }
  
  $(".tic").click(function(){
    var slot = $(this).attr('id');
    playerTurn(turn, slot);
    
  })
  function reset(){
    var turns = ["#","#","#","#","#","#","#","#","#"];
    count = 0;
    $('.tic').text("#");
    gameOn = false;
    location.reload();
  }
});