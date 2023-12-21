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

DOMselectors.btn.forEach((button) => button.addEventListener("click", function(){
    let category = button.textContent.toLowerCase
    let category2 = category.toString
    let baseURL = "https://valorant-api.com/v1/"
    let newURL = baseURL.concact(category2);
    getData(newURL);
}))

/* const x = "hello"
let y = DOMselectors.BUTTON.textContent.toLowerCase.toString
let newestURL = x + y
console.log(newestURL);
 */
    DOMselectors.agentbutton.addEventListener("click" , function(){
getData("https://valorant-api.com/v1/agents");
    })
