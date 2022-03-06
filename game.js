var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

var result;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

var question_turn = player1_name;
var answer_turn = player2_name;

document.getElementById("player_question").innerHTML = "Question Turn - " + question_turn;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + answer_turn;

function send()
{
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  result = num1 * num2;

  var question_word = "<h4 id='word_display'> " + num1 + " x " + num2 + "</h4>";
  var input_box = "<br>Answer : <input type='text' id='input_check_box'>";
  var check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
  var row =  question_word + input_box + check_button ;
  document.getElementById("output").innerHTML = row;
}

function check()
{
  var user_result = document.getElementById("input_check_box").value;

  if(answer_turn == player1_name)
  {
    if(user_result == result)
    {
      alert("Correct Answer");
      player1_score += 1;
      document.getElementById("player1_score").innerHTML = player1_score;
      change_turn(player1_name, player2_name)
    }
    else{
      alert("Wrong Answer!");
      player2_score += 1;
      document.getElementById("player2_score").innerHTML = player2_score;
      change_turn(player1_name, player2_name)
    }
  }
  else if (answer_turn == player2_name)
  {
    if(user_result == result)
    {
      alert("Correct Answer");
      player2_score += 1;
      document.getElementById("player2_score").innerHTML = player2_score;
      change_turn(player2_name, player1_name);
    }
    else{
      alert("Wrong Answer!");
      player1_score += 1;
      document.getElementById("player1_score").innerHTML = player1_score;
      change_turn(player2_name, player1_name);
    }
  }
}

function change_turn(question, answer)
{
  question_turn = question;
  answer_turn = answer;
  console.log("Hi");
  document.getElementById("player_question").innerHTML = "Question Turn - " + question_turn;
  document.getElementById("player_answer").innerHTML = "Answer Turn - " + answer_turn;
  document.getElementById("output").innerHTML = "";
  var num1 = document.getElementById("num1").value = "";
  var num2 = document.getElementById("num2").value = "";
}

