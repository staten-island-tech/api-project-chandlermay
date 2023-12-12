const apiURL ="http https://swapi.dev/api/starships/9/"

console.log(fetch(apiURL));
fetch(apiURL)
.then((response) => response.json())
.then((data) => console.log(data));

async function getData(x) {
try {
    const response = await fetch(x);
    const data = await response.json();
    console.log(data);
    return data;
} catch (error) {
    console.log(error);
}
}
getData(apiURL);
