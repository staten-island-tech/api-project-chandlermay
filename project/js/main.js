function createCard(arr) {
    arr.forEach(obj => {
        const card =`
        <div class ="card"
        <h3> ${obj.name} </h3>
        <img src="${obj.image}" class="image">
        <h4> ${obj.caption}</h4>
        </div>
        `
    
    });
}