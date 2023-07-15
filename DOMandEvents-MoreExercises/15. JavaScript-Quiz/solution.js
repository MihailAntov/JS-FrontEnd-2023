function solve() {
    const results = document.querySelector("#results > .results-inner h1");
    const sections = [...document.querySelectorAll("section")];
    const firstQuestion = sections[0];
    const secondQuestion = sections[1];
    const thirdQuestion = sections[2];
    let currentQuestion = 0;
    let rightAnswers = 0;
    const questionButtons = [...document.querySelectorAll(".answer-wrap")];
    questionButtons.forEach(e=> e.parentElement.addEventListener("click",clickHandler));

    function clickHandler(e){
      let answerValue = e.currentTarget.getAttribute("data-quizindex");
      if(currentQuestion === 0){
        if(Number(answerValue) === 2){
          rightAnswers++;
        }
      }else if(currentQuestion === 1){
        if(Number(answerValue) === 4){
          rightAnswers++;
        }
      }else if (currentQuestion === 2){
        if(Number(answerValue) === 2){
          rightAnswers++;
        }        
      }

      
      sections[currentQuestion].style.display = "none";
      currentQuestion++;
      if(currentQuestion === 3){
        if(rightAnswers === 3){
          results.textContent = "You are recognized as top JavaScript fan!";
        }else{
          results.textContent = `You have ${rightAnswers} right answers`
        }
        document.querySelector("#results").style.display = "block";
      }else{
        sections[currentQuestion].style.display = "block";
      }

    }

}
