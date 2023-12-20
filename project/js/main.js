import "../style/style.css";
import { DOMselectors } from "./doms";

const apiURL = "https://valorant-api.com/v1/"

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.data);
    } catch (error) {
        console.log(error);
    }
}

DOMselectors.btn.forEach((button) => button.addEventListener("click", function(){
    let category = button.textContent.toLowerCase
    let newURL = apiURL + category
    getData(newURL);
}))

/* const x = "hello"
let y = DOMselectors.BUTTON.textContent.toLowerCase.toString
let newestURL = x + y
console.log(newestURL);
 */
