var questions = [
      {
            prompt: "What color is the sky today?\n(a) red\n\ (b) blue\n (c) yellow",
            answer: "b"
      },
      {
            prompt: "What does a snickers bar contain of the following ingredients?\n(a) peanuts\n (b) strawberry\n (c) pineapple",
            answer: "a"
      },
      {
            prompt: "Which new Doom game was released in 2020?\n(a) doom 64\n (b) doom 3\n (c) doom eternal",
            answer: "c"
      },
      {
            prompt: "When did the Playstation 2 come out?\n(a) 1995\n (b)2000\n (c) 2005",
            answer: "b"
      },
      {
        prompt: "When did world war 2 end?\n(a) 1945\n (b) 1948\n (c) 1961", 
        answer: "a"   
      }
]
var score = 0;
 
for(var i=0; i < questions.length; i++){
      var response = window.prompt(questions[i].prompt);
      if(response == questions[i].answer){
      score++;
      alert("Correct!");
      } else{
            alert("Wrong!");
      }
}
alert("you got" + score + "/" + questions.length);
