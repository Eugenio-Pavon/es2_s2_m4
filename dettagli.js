document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  if (id) {
    fetch(`https://striveschool-api.herokuapp.com/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        displayBookDetails(data);
      })
      .catch((error) => {
        console.error("Errore", error);
      });
  }
});

function displayBookDetails(book) {
  const bookDetails = document.getElementById("details");

  bookDetails.innerHTML = `
    <img src="${book.img}"  style="max-width: 20%;">
       <div>
       
         <h2>${book.title}</h2>
         <h2>Categoria: ${book.category}</h2>
         <h2>Prezzo: ${book.price} $</h2>
        
      </div>  
      `;
}
