import { DOMselectors } from "./doms";
function createCard(arr) {
    arr.forEach((obj) => {
      const card = `
    <div class="card">
            <h3>${obj.displayName}</h3>
            <img src="${obj.displayIcon}" class="image">
            <h4>${obj.role.displayName}</h4>
          </div>
    `
      DOMselectors.container.insertAdjacentHTML("beforeend", card)
    });
  };

  export {createCard};