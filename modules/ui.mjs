import { Fetch } from "./fetch.mjs";
import { Result } from "./result.mjs";

export class UI {
    static question = document.querySelector('#question');
    static options = document.querySelectorAll('#option');
    static next = document.querySelector('#next');
    static previous = document.querySelector('#previous');
    static submit = document.querySelector('#submit');
    static finalScore = document.querySelector('#final-score');
    static buttons = document.querySelector('#buttons');
    static radios = document.getElementsByName('radio');
    static serialNO = 0;
    
    static showQuestion() {
        const obj = Fetch.data[UI.serialNO];
        let count = 0,
            correct = true;

        UI.question.innerHTML = 'Q) ' + obj.question;
        UI.options.forEach(option => {
            if(count === Result.correctAnswers[UI.serialNO] && correct) {
                correct = false;
                option.innerHTML = obj.correct_answer;
            } else {
                option.innerHTML = obj.incorrect_answers[count++]
            };
        });
        UI.radios.forEach(radio => {
            UI.deColorize();
            radio.checked = false;
        });
    };

    static nextButton() {
        Result.choice();
        if(UI.serialNO == 9) UI.end();
            else {
                UI.serialNO++;
                UI.showQuestion();
                UI.previous.style.display = 'block';
            };
    };

    static previousButton() {
        if(UI.serialNO == 0) UI.start();
            else {
                UI.hideSubmit();
                UI.serialNO--;
                UI.showQuestion();
            };   
    };

    static start() {
        UI.previous.style.display = 'none';
        UI.submit.style.display = 'none';
    };

    static end() {
        UI.next.style.display = 'none';
        UI.submit.style.display = 'block';
    };

    static hideSubmit() {
        UI.next.style.display = 'block';
        UI.submit.style.display = 'none';
    };

    static displayScore(score) {       
        UI.finalScore.innerText = score;
        UI.previous.style.display = 'none';
        UI.submit.style.display = 'none';
        UI.next.style.display = 'none';
    };

    static addReloadButton() {
        const reloadButton = document.createElement('a');
        reloadButton.className = 'btn btn-info btn-lg text-uppercase';
        reloadButton.innerText = 'Try Again';
        reloadButton.setAttribute('href', 'index.html');
        UI.buttons.appendChild(reloadButton);
    };

    static colorize(ele) {
        UI.deColorize();
        if(ele.classList.contains('form-check-input')) {
            ele.parentElement.lastElementChild.classList.add('text-success');
        };
    };

    static deColorize() {
        UI.options.forEach(option => {
            option.parentElement.lastElementChild.classList.remove('text-success');
        });
    };
};
