interface Book  {
    title: string;
    author: string;
    year: number;
}

const books : Book[]= [
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
];

function getBooksByAuthor(author: string): Book[] {
    return books.filter(book => book.author === author);
}

console.log(getBooksByAuthor('George Orwell'));