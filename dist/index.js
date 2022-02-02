var _a, _b, _c, _d;
var API_URL = "https://icanhazdadjoke.com/";
var API_WEATHER = "http://api.weatherstack.com/current";
var API_WEATHER_KEY = "b98db4ac3beb81feecf2ed523b254135";
var API_CHUCKJOKES = "https://api.chucknorris.io/jokes/random";
var headersFetch = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
};
var headersFetchCors = {
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
};
var reportJokes = [];
export function getAJoke() {
    var randomAPI = Math.floor(Math.random() * 2);
    var API_To_Call = (randomAPI == 0) ? API_URL : API_CHUCKJOKES;
    fetch("".concat(API_To_Call), headersFetch)
        .then(function (response) { return response.json(); })
        .then(function (joke) {
        var _a;
        var divJoke = document.getElementById("joke");
        if (divJoke === null || divJoke === void 0 ? void 0 : divJoke.hasChildNodes()) {
            divJoke.innerHTML = " ";
        }
        var p = document.createElement("p");
        var joke_text = (randomAPI == 0) ? joke.joke : joke.value;
        p.textContent = joke_text;
        p.setAttribute('id', 'jokeFetch');
        p.setAttribute('idJoke', joke.id);
        divJoke === null || divJoke === void 0 ? void 0 : divJoke.appendChild(p);
        (_a = document.getElementById('jokeRate')) === null || _a === void 0 ? void 0 : _a.classList.add("show");
        randomBack();
    });
}
function randomBack() {
    var randomAPI = Math.floor(Math.random() * 4);
    var randomBack = "jokes__back--back".concat(randomAPI);
    var divBackground = document.getElementById('jokesBackground');
    divBackground === null || divBackground === void 0 ? void 0 : divBackground.classList.remove("jokes__back--back1");
    divBackground === null || divBackground === void 0 ? void 0 : divBackground.classList.remove("jokes__back--back2");
    divBackground === null || divBackground === void 0 ? void 0 : divBackground.classList.remove("jokes__back--back3");
    divBackground === null || divBackground === void 0 ? void 0 : divBackground.classList.add(randomBack);
}
export function puntJoke(elem) {
    var _a, _b;
    var punt = elem.dataset.punt;
    var date = new Date();
    var dateIso = date.toISOString();
    var idJoke = (_a = document.getElementById("jokeFetch")) === null || _a === void 0 ? void 0 : _a.getAttribute('idJoke');
    var textJoke = (_b = document.getElementById("jokeFetch")) === null || _b === void 0 ? void 0 : _b.innerHTML;
    var jokeToAdd = {
        id: idJoke,
        joke: textJoke
    };
    var newElement = {
        joke: jokeToAdd,
        score: punt,
        date: dateIso
    };
    reportJokes.push(newElement);
    console.log('reportJokes : ', reportJokes);
}
function weather() {
    fetch("".concat(API_WEATHER, "?access_key=").concat(API_WEATHER_KEY, "&query=Barcelona"), headersFetchCors)
        .then(function (response) { return response.json(); })
        .then(function (wheater) {
        console.log('works ? : ', wheater);
    });
}
weather();
(_a = document.getElementById('getJoke')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', getAJoke);
(_b = document.getElementById('point-neg')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function (e) { puntJoke(e.target); });
(_c = document.getElementById('point-zero')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function (e) { puntJoke(e.target); });
(_d = document.getElementById('point-pos')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function (e) { puntJoke(e.target); });
//# sourceMappingURL=index.js.map