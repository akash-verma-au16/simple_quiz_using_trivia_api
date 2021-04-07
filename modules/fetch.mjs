import { UI } from "./ui.mjs";
import { Result } from "./result.mjs";

export class Fetch {
    static data;

    static get() {
        UI.start();
        Result.setCorrectAnswers();
        
        fetch('https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple')
            .then(response => response.json())
            .then(responseData => {
                Fetch.data = responseData.results;
                UI.showQuestion();
            })
            .catch(err => console.log(err))
    };
};