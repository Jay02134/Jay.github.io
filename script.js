const Quiz = [
	{
		question: "What is x if x + 10 = 15?",
		answers: ["A. 10", "B. 5", "C. 3", "D. 1"],
		correct: "B. 5"
	},
	{
		question: "What is the square root of 64?",
		answers: ["A. 8", "B. 9", "C. 10", "D. 15"],
		correct: "A. 8"
	},
	{
		question: "If x is a negative integer in the equation 15x = y, then y is?",
		answers: ["A. Positive", "B. Odd", "C. Even", "D. Negative"],
		correct: "D. Negative"
	},
	{
		question: "What is the sum of all the prime numbers between 1 and 20?",
		answers: ["A. 13", "B. 53", "C. 77", "D. 68"],
		correct: "C. 77"
	},
	{
		question: "If a rectangular garden has a length of 13 meters and a width of 9 meters, what is its perimeter?",
		answers: ["A. 29 Meters", "B. 44 Meters", "C. 90 Meters", "D. 86 Meters"],
		correct: "B. 44 Meters"
	},
];
  
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
  
let i = 0;
let score = 0;
  
function buildQuestions() {
	const question = Quiz[i];
	questionElement.innerText = question.question;
  
	answersElement.innerHTML = "";
	question.answers.forEach(option => {
		const button = document.createElement("button");
		button.innerText = option;
		answersElement.appendChild(button);
		button.addEventListener("click", Answer);
    	});
}
  
  function Answer(x) {
    const selectedButton = x.target;
    const correct = Quiz[i].correct;
  
    if (selectedButton.innerText === correct) {
      score++;
    }
  
    i++;
  
    if (i < Quiz.length) {
      buildQuestions();
    } else {
      Results();
    }
  }
  
  function Results() {
    quiz.innerHTML = `
      <h1>You Have Completed The Quiz!</h1>
      <p>Your score: ${score*20}%</p>
    `;
  }
  
  buildQuestions();
