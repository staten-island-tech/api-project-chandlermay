import { DOMselectors } from "./doms";
import "../style/style.css";

function createCard(data) {
    data.forEach((obj) => {
      const card = `
    <div class="card">
      <div class="main">
          <h2>${obj.displayName}</h2>
          <img alt="${obj.displayName}'s face" src="${obj.displayIcon}" class="image">
          <h3>${obj.role.displayName}</h3>
      </div>
      <span>
          <ul class="spancontainer"> 
          <p class="spanText">${obj.abilities[0].displayName}</p> <img alt="${obj.displayName}'s Ability 1"class="spanImage" src="${obj.abilities[0].displayIcon}">
          <p class="spanText">${obj.abilities[1].displayName}</p> <img alt="${obj.displayName}'s Ability 2"class="spanImage" src="${obj.abilities[1].displayIcon}">
          <p class="spanText">${obj.abilities[2].displayName}</p> <img alt="${obj.displayName}'s Ability 3"class="spanImage" src="${obj.abilities[2].displayIcon}">
          <p class="spanText">${obj.abilities[3].displayName}</p> <img alt="${obj.displayName}'s Ability 4"class="spanImage" src="${obj.abilities[3].displayIcon}">
          </ul>
      </span>
    </div>
    `
      DOMselectors.container.insertAdjacentHTML("beforeend", card)
    });
  };

  export {createCard};