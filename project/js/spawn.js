import { DOMselectors } from "./doms";
import "../style/style.css";

function spawnCard(data) {
    data.forEach((obj) => {
        if (obj.narrativeDescription === null) {
            obj.narrativeDescription = "It's just a team deathmatch map. Not much to say!"
            obj.tacticalDescription = "Team Deathmatch Map"
        };
        if (obj.displayName === "The Range") {
            obj.displayIcon = "../img/range.webp"
            obj.narrativeDescription = "It's just the range. Chill out here!"
        };
        const card = `
    <div class="card">
      <div class="main">
          <h2>${obj.displayName}</h2>
          <img alt="${obj.displayName} picture" src="${obj.displayIcon}" class="image">
          <h3>${obj.tacticalDescription}</h3>
      </div>
      <span>
          <p class="spanTextcontainer">${obj.narrativeDescription}</p>
      </span>
    </div>
    `
        DOMselectors.container.insertAdjacentHTML("beforeend", card)
    });
};



export { spawnCard };