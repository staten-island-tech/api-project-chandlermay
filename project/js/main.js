const apiURL = "https://swapi.dev/api"

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
getData(apiURL);

Data.forEach(result => {
    async function getdeepData(x) {
        try {
            const response = await fetch(x);
            const data = response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
});
