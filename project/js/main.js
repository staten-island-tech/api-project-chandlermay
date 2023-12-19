import "../style/style.css";
import { DOMselectors } from "./doms";

const apiURL = "https://valorant-api.com/v1/weapons"

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

console.log("hello world");