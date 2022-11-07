//https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple


const_question = document.getElementById('question');
const_options = document.querySelector('.quiz-options');


async function loadQuestion(){
    const APIUrl = 'https://opentdb.com/api.php?amount=1';
    const result = await fetch (`${APIUrl}`);
    const data = await result.json();
    //console.log(data.result[0]);
    showQuestion(data.results[0]);
}


function showQuestion(data){
    let correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;
    //console.log(data.results[0]);
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1 )), 0, correctAnswer); //inserting correct answer in random position in the options list
    loadQuestion.innerHTML = `${data.question} <br> <span class = "catagory">$ {data.category} </span>`;
    
}

loadQuestion();
