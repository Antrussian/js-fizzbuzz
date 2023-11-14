/* 

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:

 per i multipli di 3 stampi “Fizz” al posto del numero
 per i multipli di 5 stampi “Buzz” al posto del numero
 per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

Prima di partire a scrivere codice poniamoci qualche domanda:

Come faccio a sapere se un numero è divisibile per un altro? 

Abbiamo visto qualcosa di particolare che possiamo usare? 

Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare

Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione appendChild()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

*/




const ouputElement = document.querySelector('#div.outputElement')
/* dichiaro elemento = seleziono elemento in html tramite query del selettore */


for (let output = 1 ; output <= 100 ; output++ ) {
/* do intervallo di ciclo*/


/* per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.*/
    if (output % 3 === 0 && output % 5 === 0) {
        console.log("FizzBuzz");
    }
/*per i multipli di 3 stampi “Fizz” al posto del numero*/
    else if ( output % 3 === 0 ) {
        console.log("Fizz");
    }
/* per i multipli di 5 stampi “Buzz” al posto del numero*/
    else if ( output % 5 === 0 ) {
        console.log("Buzz");
    }


    else {
        console.log(output);

    }



    
       const testoAttuale = outputElement.textContent;
/*variabile d'appoggio = elemento testuale nell html*/
       outputElement.textContent = testoAttuale + output + " ";



}











