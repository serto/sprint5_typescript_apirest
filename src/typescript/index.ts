
const API_URL = "https://icanhazdadjoke.com/";

const headersFetch = { 
                    headers:{
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    }
                   };

const reportJokes:Object[] = [];

export function getAJoke(): void {

  const joke = fetch(`${API_URL}`, headersFetch)
              .then(response => response.json())
              .then( (joke) => {

                const divJoke = document.getElementById("joke");

                if (divJoke?.hasChildNodes()) {
                  divJoke.innerHTML = " ";
                }

                const p = document.createElement("p");
                p.textContent = joke.joke;
                p.setAttribute('id', 'jokeFetch');
                p.setAttribute('idJoke',  joke.id);
                divJoke?.appendChild(p);

                document.getElementById('jokeRate')?.classList.add("show");

              });
}

export async function puntJoke(elem: EventTarget): void {
  
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



document.getElementById('getJoke').addEventListener('click', getAJoke);

document.getElementById('point-neg').addEventListener('click', (e) => { puntJoke(e.target); });
document.getElementById('point-zero').addEventListener('click', (e) => { puntJoke(e.target); });
document.getElementById('point-pos').addEventListener('click', (e) => { puntJoke(e.target); });