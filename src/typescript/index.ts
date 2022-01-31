
const API_URL = "https://icanhazdadjoke.com/";


var headersFetch = { 
                    headers:{
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    }
                   };


export function getAJoke(): void {

  
  const joke = fetch(`${API_URL}`, headersFetch)
              .then(response => response.json())
              .then( (joke) => {

                const divJoke = document.getElementById("joke");
                const p = document.createElement("p");
                p.textContent = joke.joke;
                divJoke?.appendChild(p);

              });
}

document.getElementById('getJoke').addEventListener('click', getAJoke);