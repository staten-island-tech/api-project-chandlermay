import "../style/style.css";
import { DOMselectors } from "./doms";
import { createCard } from "./create";
import { spawnCard } from "./spawn";

async function getAgentData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const playableAgents = data.data.filter(agent => agent.isPlayableCharacter);
        createCard(playableAgents);
    } catch (error) {
        console.log(error);
    }
}

async function getMapData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        spawnCard(data.data);
    } catch (error) {
        console.log(error);
    }
}

function clearScreen() {
    DOMselectors.container.innerHTML = "";
    DOMselectors.backgroundcontainer.innerHTML = "";
};

DOMselectors.agentbutton.addEventListener("click", function(){
    clearScreen();
    getAgentData("https://valorant-api.com/v1/agents");
})

DOMselectors.mapsbutton.addEventListener("click", function () {
    clearScreen();
    getMapData("https://valorant-api.com/v1/maps");
});


