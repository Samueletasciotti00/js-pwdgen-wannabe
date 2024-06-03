// Chiedi all’utente il suo nome
let nomeUtente = prompt('Inserisci qui il tuo nome');
console.log(nomeUtente);

// Chiedi il suo cognome
let cognomeUtente = prompt('Inserisci qui il tuo cognome');
console.log(cognomeUtente);

// Poi chiedi il suo colore preferito
let coloreUtente = prompt('Inserisci il tuo colore preferito!');
console.log(coloreUtente);

// Infine scrivi sulla pagina nomecognomecolorepreferito23
let password = nomeUtente + cognomeUtente + coloreUtente;

console.log(password)

document.getElementById('name').innerHTML = password + '23';