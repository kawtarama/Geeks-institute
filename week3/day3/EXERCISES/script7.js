
const allBooks = [
    {
        titre: "Harry Potter à l'école des sorciers",
        auteur: "J.K. Rowling",
        image: "https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: true
    },
    {
        titre: "Le Seigneur des Anneaux",
        auteur: "J.R.R. Tolkien",
        image: "https://m.media-amazon.com/images/I/71ZLavBjpRL._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: false
    }
];


const section = document.querySelector('.listBooks');


allBooks.forEach(book => {
    
    const bookDiv = document.createElement('div');
    
   
    const bookInfo = document.createElement('p');
    bookInfo.textContent = `${book.titre}, écrit par ${book.auteur}`;
    
  
    const bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookImage.style.width = '100px';
    
  
    bookDiv.appendChild(bookInfo);
    bookDiv.appendChild(bookImage);
    
    
    if (book.alreadyRead) {
        bookInfo.style.color = 'red';
    }
    
    
    section.appendChild(bookDiv);
});