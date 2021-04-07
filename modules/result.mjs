import { UI } from "./ui.mjs";

export class Result {
    static selectedAnswers = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
    static correctAnswers = [];
    static radios = document.getElementsByName('radio');

    static submitButton() {
        let score = 0;
        for (const i in Result.correctAnswers) {
            if(Result.correctAnswers[i] === Result.selectedAnswers[i]) score++;           
        };
        UI.addReloadButton();
        UI.displayScore(score);
    };

    static choice() {
        Result.radios.forEach(radio => {
            if(radio.checked)
                Result.selectedAnswers[UI.serialNO] = parseInt(radio.value);
        });
    };

    static setCorrectAnswers() {
        for(let i = 0; i < 10; i++){
            const randomIndex =  Math.floor(Math.random() * 4);
            Result.correctAnswers.push(randomIndex);
        };
    };
};