import "../style/style.css";
import { DOMselectors } from "./doms";

const apiURL = "https://valorant-api.com/v1/"

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getData(apiURL);

DOMselectors.btn.forEach((button) => button.addEventListener("click", function(){
    let category = button.textContent.toLowerCase.toString
    let newURL = apiURL + category
    getData(newURL);
}))

const x = "hello"
let y = DOMselectors.BUTTON.textContent.toLowerCase.toString
let newestURL = x + y
console.log(newestURL);

