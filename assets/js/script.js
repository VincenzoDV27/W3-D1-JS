/*
  REGOLE
  - Le risposte vanno scritte in JavaScript sotto ogni commento.
  - Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
  - In alternativa: nel terminale, `node script.js`.
  - Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

const utenti = [
  {
    id: 1,
    nome: "Antonio",
    cognome: "Rossi",
    eta: 28,
    attivo: true,
    città: "Milano",
  },
  {
    id: 2,
    nome: "Anna",
    cognome: "Bianchi",
    eta: 35,
    attivo: false,
    città: "Roma",
  },
  {
    id: 3,
    nome: "Luca",
    cognome: "Verdi",
    eta: 17,
    attivo: true,
    città: "Milano",
  },
  {
    id: 4,
    nome: "Sara",
    cognome: "Neri",
    eta: 17,
    attivo: true,
    città: "Torino",
  },
  {
    id: 5,
    nome: "Marco",
    cognome: "Gialli",
    eta: 45,
    attivo: false,
    città: "Roma",
  },
  {
    id: 6,
    nome: "Chiara",
    cognome: "Rosa",
    eta: 30,
    attivo: true,
    città: "Milano",
  },
];

/* ESERCIZIO 1 — Arrow function compatta
   Riscrivi questa funzione come arrow function in forma compatta:
     function quadrato(n) { return n * n; }
   Chiamala con quadrato(5) e stampa il risultato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const quadrato = (n) => {
  return n * n;
};

console.log(quadrato(5));

/* ESERCIZIO 2 — Destructuring di oggetto
   Crea un oggetto "persona" con almeno 4 properties (es. nome, cognome, eta, città).
   Estrai 3 properties in 3 variabili usando destructuring.
   Stampa le 3 variabili.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const persona = {
  nome: "Pippo",
  cognome: "Pluto",
  eta: 22,
  citta: "Palermo",
};

const { nome, cognome, citta } = persona;
console.log(nome, cognome, citta);

/* ESERCIZIO 3 — Destructuring nei parametri
   Scrivi una arrow function "riepilogo" che riceve un utente e ritorna
   "Nome Cognome (eta anni)" usando destructuring nei parametri.
   Chiamala su utenti[0], utenti[1], utenti[2] e stampa i 3 risultati.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const riepilogo = (persona) => {
  return `${persona.nome} ${persona.cognome} (${persona.eta} anni)`;
};

console.log(riepilogo(utenti[0]));
console.log(riepilogo(utenti[1]));
console.log(riepilogo(utenti[2]));

/* ESERCIZIO 4 — Spread su array
   Crea numeri = [1, 2, 3].
   Crea una copia indipendente con spread, fai push(99) sulla copia.
   Stampa originale e copia per dimostrare che l'originale non è cambiato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numeri = [1, 2, 3];
const copiaNumeri = [...numeri];

copiaNumeri.push(99);

console.log(numeri);
console.log(copiaNumeri);

/* ESERCIZIO 5 — Spread per concatenare
   frutti  = ["mela", "banana"]
   verdure = ["carota", "spinaci"]
   Crea cibo che li unisca con spread. Stampalo.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const frutti = ["mela", "banana"];
const verdure = ["carota", "spinaci"];

const cibo = [...frutti, ...verdure];

console.log(cibo);

/* ESERCIZIO 6 — Spread su oggetto
   prodotto = { nome: "Cuffie", prezzo: 79.99 }
   Crea un nuovo oggetto con "disponibile: true" aggiunto, senza modificare prodotto.
   Stampa il nuovo oggetto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prodotto = { nome: "Cuffie", prezzo: 79.99 };
const newProd = { ...prodotto, disponibile: true };

console.log(prodotto);
console.log(newProd);

/* ESERCIZIO 7 — forEach
   Stampa tutti gli utenti nel formato "- Nome Cognome (città)".
   Esempio: "- Mario Rossi (Milano)"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

utenti.forEach((utenti) => {
  console.log(`- ${utenti.nome} ${utenti.cognome} (${utenti.città})`);
});

/* ESERCIZIO 8 — map a stringhe
   Usa map per creare nomiCompleti = ["Mario Rossi", "Anna Bianchi", ...].
   Stampa l'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const nomiCompleti = utenti.map((utenti) => `${utenti.nome} ${utenti.cognome}`);

console.log(nomiCompleti);

/* ESERCIZIO 9 — map a oggetti
   Usa map per creare utentiPlus: array di oggetti dove ogni utente ha tutte
   le properties originali + una nuova property "descrizione" con valore
   "Nome Cognome, città".
   Suggerimento: usa spread per copiare le properties esistenti.
   Stampa il primo elemento di utentiPlus.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const utentiPlus = utenti.map((utente) => ({
  ...utente,
  descrizione: `${utente.nome} ${utente.cognome}, ${utente.città}`,
}));

console.log(utentiPlus[0]);

/* ESERCIZIO 10 — filter attivi
   Usa filter per ottenere solo gli utenti con attivo: true.
   Stampa l'array risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const usersOn = utenti.filter((utenti) => utenti.attivo);

console.log(usersOn);

/* ESERCIZIO 11 — filter combinato
   Usa filter per ottenere solo gli utenti maggiorenni (eta >= 18) che vivono a Milano.
   Stampa l'array risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const maggiorenni = utenti.filter(
  (utenti) => utenti.eta >= 18 && utenti.città === "Milano",
);

console.log(maggiorenni);

/* ESERCIZIO 12 — find
   Usa find per trovare il primo utente con id === 4.
   Stampa l'oggetto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const indice = utenti.find((utenti) => utenti.id === 4);

console.log(indice);

/* ESERCIZIO 13 — reduce
   a) Usa reduce per calcolare l'età media (somma età / numero utenti). Stampa.
   b) Usa reduce per contare il numero di utenti attivi. Stampa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//esercizio a

const sumAge = utenti.reduce((sum, utenti) => (sum += Number(utenti.eta)), 0);

const mAge = sumAge / utenti.length;

// console.log(Math.floor(mAge));
console.log(mAge);

//esercizio b

const utentiAttivi = utenti.reduce((sum, utente) => {
  if (utente.attivo) {
    return sum + 1;
  }
  return sum;
}, 0);

console.log(utentiAttivi);

/* ESERCIZIO 14 — sort
   a) Ordina gli utenti per eta crescente. Stampa l'array di nomi nell'ordine.
   b) Ordina gli utenti per nome alfabeticamente. Stampa l'array di nomi nell'ordine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// esercizio a

const usersCre = utenti.sort((eta1, eta2) => eta1.eta - eta2.eta);
console.log(usersCre);

// esercizio b

/* ESERCIZIO 15 — Chaining
   Componi una catena di metodi che:
   - filtra gli utenti attivi
   - trasforma in array di stringhe "Nome Cognome"
   - ordina alfabeticamente
   Stampa il risultato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const chaining = utenti
  .filter((utenti) => utenti.attivo)
  .map((utenti) => `${utenti.nome} ${utenti.cognome}`)
  .sort();

console.log(chaining);
