const row = document.querySelector(".row");
const carrello = document.querySelector(".carrello");

fetch("https://striveschool-api.herokuapp.com/books", {
  headers: {
    Authorization: "WTQ1srDnY1d0gTqNdwZvvC1fxGMWJdwTWAIPo6o8IczD96fHEsDzyiBP",
  },
})
  .then((res) => res.json())

  .then((data) => {
    data.forEach(function (elementi) {
      let titolo = elementi.title;
      let foto = elementi.img;
      let prezzi = elementi.price;
      row.innerHTML += `
      <div class="col-12 col-lg-3 col-md-4 col-sm-6 p-1">
       <div class="card " >
          <img src="${foto}" class="card-img-top">
        <div class="card-body">
           <p class="card-text">${titolo}</p>
           <h4>PREZZO: ${prezzi} $ </h4>
          
           
           <button class="tasto" onclick="aggiungiCarrello(event, '${titolo}')"> Aggiungi al carrello </button>
           <button class="tasto2" onclick="togliCard(event)">salta</button>
           <button class="dettagli-btn">  <a href="dettagli.html?id=${elementi.asin}">Dettagli</a> </button>
        </div>
       </div>
       </div>`;
    });
  });

function aggiungiCarrello(event, titolo) {
  //Cambio il colore e il contenuto del pulsante dopo i click
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Aggiunto";

  //Aggiungo i titoli delle card selezionate nel carrello
  const cartItem = document.createElement("div");
  cartItem.innerText = titolo;
  carrello.appendChild(cartItem);
}
function togliCard(event) {
  const card = event.target.parentNode.parentNode;
  card.style.display = "none";
}
