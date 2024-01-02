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
function filters() {
    DOMselectors.button.forEach((btn) => btn.addEventListener("click", function () {
        const baseURL = "https://valorant-api.com/v1/"
        let category = btn.textContent.toLowerCase()
        let newURL = baseURL + category
        getData(newURL);
    })
    )
}
filters();