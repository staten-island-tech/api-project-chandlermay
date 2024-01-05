import { DOMselectors } from "./doms";
import "../style/style.css";

function createCard(arr) {
    arr.forEach((obj) => {
      const card = `
    <div class="card">
            <h2>${obj.displayName}</h2>
            <img src="${obj.displayIcon}" class="image">
            <h4>${obj.role.displayName}</h4>
          </div>
    `
      DOMselectors.container.insertAdjacentHTML("beforeend", card)
    });
  };

  export {createCard};