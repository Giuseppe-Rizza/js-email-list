// Seleziono gli elementi di output
const listEmailContainer = document.getElementById("list-email-container");

// Utilizzo una variabile per parametrizzare l'endpoint
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

// Creo ciclo for per generare dieci mail
for (let i = 0; i < 10; i++) {
    const tenEmail = [];
    
// Chiamata Ajax verso l'API
    axios.get(endpoint)
        .then(response => {
            tenEmail.push (response.data.response);
            console.log(tenEmail);

            listEmailContainer.innerHTML += `<li>${result}</li>`
            
        })
        .catch(error => {
            console.error(error)
        });

}