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




  
const wrapperElement=document.querySelector('div.wrapper');

for (let output = 1 ; output <= 100 ; output++ ) {
/* do intervallo di ciclo*/
  

/* creo elementi nell'html*/
const cardElement = document.createElement ('div');
cardElement.className = 'card';
const pElement=document.createElement('p');


wrapperElement.appendChild(cardElement);
cardElement.appendChild(pElement);








/* per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.*/
    if (output % 3 === 0 && output % 5 === 0) {
        console.log("FizzBuzz");
   
        pElement.textContent = 'FizzBuzz';
        cardElement.classList = 'card-red';
        

    }
/*per i multipli di 3 stampi “Fizz” al posto del numero*/
    else if ( output % 3 === 0 ) {
        console.log("Fizz");
        pElement.textContent = 'Fizz';
        cardElement.classList = 'card-green';
    }
/* per i multipli di 5 stampi “Buzz” al posto del numero*/
    else if ( output % 5 === 0 ) {
        console.log("Buzz");
        pElement.textContent = 'Buzz';
        cardElement.classList = 'card-yellow';
    }



    else {
        console.log(output);
        pElement.innerHTML = output;
        cardElement.classList = 'card-blue';

    }


    
    
    
   

}











