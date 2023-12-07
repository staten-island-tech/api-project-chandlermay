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
fetch("https://swapi.dev/")
    .then((SWA) => {
        createCard(SWA);
    })
async function getData(){
    let res = await.fetch(
        "httpsmcdonald-s-products-api.p.rapidapi.com"
    )
}