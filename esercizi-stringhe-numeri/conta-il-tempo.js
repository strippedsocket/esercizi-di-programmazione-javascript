/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/
var time = 12700;
var hours = Math.floor(time/3600);
var hresto = time%3600;
console.log(hresto);
var min = Math.floor(hresto/60);
var minresto = hresto%60;
var sec = minresto;
console.log(hours, min, sec);