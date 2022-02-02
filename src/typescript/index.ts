
const API_URL = "https://icanhazdadjoke.com/";
const API_WEATHER = "http://api.weatherstack.com/current";
const API_WEATHER_KEY = "b98db4ac3beb81feecf2ed523b254135";
const API_CHUCKJOKES = "https://api.chucknorris.io/jokes/random";

const headersFetch = { 
                    headers:{
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    }
                   };

const headersFetchCors = { 
                    mode: 'cors',
                    headers:{
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': '*'
                    }
                  };

const reportJokes:Object[] = [];

export function getAJoke(): void {

  const randomAPI = Math.floor(Math.random() * 2);

  const API_To_Call = (randomAPI == 0) ? API_URL : API_CHUCKJOKES;

  fetch(`${API_To_Call}`, headersFetch)
              .then(response => response.json())
              .then( (joke) => {

                const divJoke = document.getElementById("joke");

                if (divJoke?.hasChildNodes()) {
                  divJoke.innerHTML = " ";
                }

                const p = document.createElement("p");

                const joke_text = (randomAPI == 0) ? joke.joke : joke.value;

                p.textContent = joke_text;
                p.setAttribute('id', 'jokeFetch');
                p.setAttribute('idJoke',  joke.id);
                divJoke?.appendChild(p);

                document.getElementById('jokeRate')?.classList.add("show");

                randomBack();

              });
}

function randomBack() {

  let randomAPI = Math.floor(Math.random() * 4);
  const randomBack = `jokes__back--back${randomAPI}`;

  const divBackground = document.getElementById('jokesBackground');

  divBackground?.classList.remove("jokes__back--back1");
  divBackground?.classList.remove("jokes__back--back2");
  divBackground?.classList.remove("jokes__back--back3");
  divBackground?.classList.add(randomBack);

}

export function puntJoke(elem: EventTarget): void {
  
  const punt = elem.dataset.punt;

  const date = new Date();
  const dateIso = date.toISOString();

  const idJoke = document.getElementById("jokeFetch")?.getAttribute('idJoke');
  const textJoke = document.getElementById("jokeFetch")?.innerHTML;

  const jokeToAdd = {
    id: idJoke,
    joke: textJoke
  }

  const newElement = {
    joke: jokeToAdd,
    score: punt,
    date: dateIso
  };

  reportJokes.push(newElement);

  console.log('reportJokes : ', reportJokes);
}

function weather(): void {
  fetch(`${API_WEATHER}?access_key=${API_WEATHER_KEY}&query=Barcelona`, headersFetchCors)
              .then(response => response.json())
              .then( (wheater) => {

                console.log('works ? : ', wheater);

              }); 
}

weather();

document.getElementById('getJoke')?.addEventListener('click', getAJoke);

document.getElementById('point-neg')?.addEventListener('click', (e) => { puntJoke(e.target); });
document.getElementById('point-zero')?.addEventListener('click', (e) => { puntJoke(e.target); });
document.getElementById('point-pos')?.addEventListener('click', (e) => { puntJoke(e.target); });