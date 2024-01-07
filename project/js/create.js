import { DOMselectors } from "./doms";
import "../style/style.css";

function createCard(data) {
    data.forEach((obj) => {
      const card = `
    <div class="card">
      <div class="main">
          <h2>${obj.displayName}</h2>
          <img src="${obj.displayIcon}" class="image">
          <h4>${obj.role.displayName}</h4>
      </div>
      <span>
          <h2>Abilities</h2>
          <ul class="spancontainer"> 
          <p class="spanText">${obj.abilities[0].displayName}</p> <img class="spanImage" src="${obj.abilities[0].displayIcon}">
          <p class="spanText">${obj.abilities[1].displayName}</p> <img class="spanImage" src="${obj.abilities[1].displayIcon}">
          <p class="spanText">${obj.abilities[2].displayName}</p> <img class="spanImage" src="${obj.abilities[2].displayIcon}">
          <p class="spanText">${obj.abilities[3].displayName}</p> <img class="spanImage" src="${obj.abilities[3].displayIcon}">
          </ul>
      </span>
    </div>
    `
      DOMselectors.container.insertAdjacentHTML("beforeend", card)
    });
  };

  export {createCard};