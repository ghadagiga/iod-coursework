const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];
    function getBookTitle(bookId){
        const found = books.find((book) => books.id== bookId);
        return(console.log(books));
    }
    function getOldBooks(){
        const oldbook=books.filter((book)=>books.year>1950);
        return console.log(books);
    }

    function addGenre(){
     const newmap = books.map((book) => book.genre='classic');
     return(console.log(books));
    }
     function getTitles(authorInitial){
    const authbooktitle=books.map((book)=>books.filter(books.author.startsWith("authorInitial")));
     return(console.log(authbooktitle));
     }
     function latestBook(){
        const found = books.find((book) => books.year=books.sort.reverse(year));
        return(console.log(found.title));
     }
     //getBookTitle(3);
    
     getOldBooks;
     addGenre();
     getTitles('J.');