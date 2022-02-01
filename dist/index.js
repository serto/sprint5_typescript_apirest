var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var API_URL = "https://icanhazdadjoke.com/";
var headersFetch = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};
var reportJokes = [];
export function getAJoke() {
    var joke = fetch("".concat(API_URL), headersFetch)
        .then(function (response) { return response.json(); })
        .then(function (joke) {
        var _a;
        var divJoke = document.getElementById("joke");
        if (divJoke === null || divJoke === void 0 ? void 0 : divJoke.hasChildNodes()) {
            divJoke.innerHTML = " ";
        }
        var p = document.createElement("p");
        p.textContent = joke.joke;
        p.setAttribute('id', 'jokeFetch');
        p.setAttribute('idJoke', joke.id);
        divJoke === null || divJoke === void 0 ? void 0 : divJoke.appendChild(p);
        (_a = document.getElementById('jokeRate')) === null || _a === void 0 ? void 0 : _a.classList.add("show");
    });
}
export function puntJoke(elem) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var punt, date, dateIso, idJoke, textJoke, jokeToAdd, newElement;
        return __generator(this, function (_c) {
            punt = elem.dataset.punt;
            date = new Date();
            dateIso = date.toISOString();
            idJoke = (_a = document.getElementById("jokeFetch")) === null || _a === void 0 ? void 0 : _a.getAttribute('idJoke');
            textJoke = (_b = document.getElementById("jokeFetch")) === null || _b === void 0 ? void 0 : _b.innerHTML;
            jokeToAdd = {
                id: idJoke,
                joke: textJoke
            };
            newElement = {
                joke: jokeToAdd,
                score: punt,
                date: dateIso
            };
            reportJokes.push(newElement);
            console.log('reportJokes : ', reportJokes);
            return [2 /*return*/];
        });
    });
}
document.getElementById('getJoke').addEventListener('click', getAJoke);
document.getElementById('point-neg').addEventListener('click', function (e) { puntJoke(e.target); });
document.getElementById('point-zero').addEventListener('click', function (e) { puntJoke(e.target); });
document.getElementById('point-pos').addEventListener('click', function (e) { puntJoke(e.target); });
//# sourceMappingURL=index.js.map