const apiURL = "http https://swapi.dev/api/starships/9/"

async function getData(x) {
    try {
        const response = await fetch(x);
        response.then((result) => {
            async function deeperData() {
                await fetch(result);
            };
            deeperData();
        });
        const deepestData = await response.json();
        console.log(deepestData);
    } catch (error) {
        console.log(error);
    }
}
getData(apiURL);