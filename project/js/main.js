import "../style/style.css";
import { DOMselectors } from "./doms";

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.data);
    } catch (error) {
        console.log(error);
    }
}

    DOMselectors.agentbutton.addEventListener("click" , function(){
getData("https://valorant-api.com/v1/agents");
    });
    DOMselectors.weaponsbutton.addEventListener("click" , function(){
getData("https://valorant-api.com/v1/weapons");
    });
    DOMselectors.mapsbutton.addEventListener("click" , function(){
getData("https://valorant-api.com/v1/maps");
    });
    DOMselectors.currencybutton.addEventListener("click" , function(){
getData("https://valorant-api.com/v1/currencies");
    });

function filters() {
    domselectors.button.forEach(btn)
}