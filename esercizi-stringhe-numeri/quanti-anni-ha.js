/*
  Quanti anni ha?
  Scrivi un programma che prenda in input un anno di nascita e determini l'età della persona, calcola anche quanti anni sono necessari per raggiungere i 100. Stampa in output entrambi i risultati.
  http://www.imparareaprogrammare.it
*/
var anno_nascita= 1982;
var d= new Date();
var anno_attuale= d.getFullYear();
var eta= anno_attuale-anno_nascita;
var mancano_a_100= 100-eta;
console.log('Età: '+eta);
console.log('Anni mancanti ai 100: '+mancano_a_100);
