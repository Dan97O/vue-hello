/* 

Stampare a schermo un messaggio all’interno di un :puntare_a_destra: h1 :puntare_a_sinistra: utilizzando una proprietá nell'oggetto restituito dalla funzione data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

*/

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      image: 'https://www.geekandjob.com/uploads/wiki/f236a1aa005ef9a93041f294749e86d1.png'
    }
  }
}).mount('#app')

























