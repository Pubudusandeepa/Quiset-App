
function check() {

  var question1 =document.getElementById("quiz").question1.value;
  var question2 =document.quiz.question2.value;
  var question3 =document.quiz.question3.value;
  var correct = 0;

  if(question1 =="Sri Jayawardanapura Kotte")
  {
      correct++;
  }
  if(question2 == "Nicola Tesla"){

    correct++;
  }
  if(question3 == "Ewarust"){
      correct++;
  }
  var message =["Greate Job! ","That's just okay","You really nead to do better"];
  var picture =["th.jpg","pl.jpg","gh.jpg"];
  var range;

  if(correct < 1){
      range =2;
  }
  if(correct>0 && correct<3)
  {
      range = 1;
  }
  if(correct > 2)
  {
      range =0;
  }
   
   document.getElementById("after_submit").style.visibility = "visible";
   document.getElementById("message").innerHTML = message[range];
   document.getElementById("number_correct").innerHTML ="You got" + correct + "correct.";
   document.getElementById("picture").src =picture[range];
  
}