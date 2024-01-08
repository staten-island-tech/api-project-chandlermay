import "../style/style.css";
import { DOMselectors } from "./doms";
import { createCard } from "./create";

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.data);
    } catch (error) {
        console.log(error);
    }
}

fetch('https://valorant-api.com/v1/agents')
  .then(response => response.json())
  .then(data => {
    const playableAgents = data.data.filter(agent => agent.isPlayableCharacter);
    createCard(playableAgents);
});

DOMselectors.button.forEach.addEventlistener("click")
/* function filters() {
    DOMselectors.button.forEach((btn) => btn.addEventListener("click", function () {
        const baseURL = ""
        let category = btn.textContent.toLowerCase()
        let newURL = baseURL + category
        getData(newURL);
    })
    )
}
filters(); */
