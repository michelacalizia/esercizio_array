/*//metodo map()
const num =[2, 5, 7, 8, 10];
//map scorre tutti gli elementi degli array
const numeriRaddoppiati = numeri.map((num) => {

    return num *2;
 });
 console.log(numeriRaddoppiati);
 //console.log(typeof numeriRaddoppiati);


console.log(num);

//es. : array di nomi -> in maiuscolo
*/

//creo un array con elenco di tre stringhe di testo
const nomi = ['anna', 'luca', 'marco'];
//creo un nuovo array con .map che prende l'array di partenza 
// e trasforma ogni singolo nome senza modificare l'elenco originale 
const nomiMaiuscolo= nomi.map(nome => nome.toUpperCase());
 

//console.log(nomiMaiuscolo);

//metodo filter()

 const numeri = [34, 56, 7, 100, 34, 3];
 //filter controlla ogni elemento dell'array se restituisce true, 
 // l'elemento viene mantenuto, se restituisce false viene escluso
 const maggioriCinquanta = numeri.filter((n) => {
    return n > 50;
 });
 console.log(maggioriCinquanta);

 // es.: applicare il metodo filter su un array per restituire 
 // il numero di caratteri di una stringa > 5 

 const parole = ["mare" ,"sole" , "terra" ,"montagna"];
 const paroleLunghe = parole.filter((p) => {
    return p.lenght >= 5;
    
 });
console.log(paroleLunghe);






//metodo some()


const eta = [87, 5, 7, 17, 12, 69, 100, 34];
const minorenni = eta.some((anni)=> {
    return anni <18;
})
console.log(minorenni);

//          -----------metodo reduce ()
const carrello = [
    {nome : "Pane", prezzo: 3.50, quantita: 3},
    {nome : "Latte", prezzo: 1.50, quantita: 5},
    {nome : "Pasta", prezzo: 2.20, quantita: 8},
]

//reduce( )attraversa tutti gli ElementInternals//acc -> accumulatore parte da 0
const totaleCarrello = carrello.reduce((accumulatore, prodotto) => {
    //calcolo del subtotale del singolo prodotto
    const subtotale = prodotto.prezzo * prodotto.quantita;
    //aggiungiamo il prodotto all accumulatore
    return accumulatore + subtotale;

}, 0);//parte da zero
console.log(totaleCarrello);




//---esercizi combinati

//abbiamo un array di prodotti/oggetti informatici e 
// voglio selezionare i prodotti con prezzo inferiore a 100 euro 
// e successivamente estrarre il nome
//1 console.log -> prodottiEconomici

const prodotti =  [
     {nome : "Stampante", prezzo: 99},
     {nome : "Tastiera", prezzo: 120},
     {nome : "Cuffie", prezzo : 89}
]
const prodottiEconomici = prodotti

     .filter(p => p.prezzo < 100)

     .map(p => p.nome + " " + p.prezzo);



console.log(prodottiEconomici);


