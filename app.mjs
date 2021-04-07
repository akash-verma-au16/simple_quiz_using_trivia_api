import { UI } from "./modules/ui.mjs";
import { Fetch } from "./modules/fetch.mjs";
import { Result } from "./modules/result.mjs";

const loadAllEventListeners = () => {
    addEventListener('DOMContentLoaded', Fetch.get);
    document.querySelector('#options').addEventListener('click', (e) => UI.colorize(e.target));
    document.querySelector('#next').addEventListener('click', UI.nextButton);
    document.querySelector('#previous').addEventListener('click', UI.previousButton);
    document.querySelector('#submit').addEventListener('click', Result.submitButton);
};

loadAllEventListeners();