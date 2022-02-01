var API_URL = "https://icanhazdadjoke.com/";
var headersFetch = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};
export function getAJoke() {
    var joke = fetch("".concat(API_URL), headersFetch)
        .then(function (response) { return response.json(); })
        .then(function (joke) {
        var divJoke = document.getElementById("joke");
        if (divJoke === null || divJoke === void 0 ? void 0 : divJoke.hasChildNodes()) {
            divJoke.innerHTML = " ";
        }
        var p = document.createElement("p");
        p.textContent = joke.joke;
        p.setAttribute('id', 'jokeFetch');
        divJoke === null || divJoke === void 0 ? void 0 : divJoke.appendChild(p);
    });
}
document.getElementById('getJoke').addEventListener('click', getAJoke);
//# sourceMappingURL=index.js.map