const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };

  reader.favoriteBooks.push(
  {
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    publisher: 'Rocco',
  }
)

 
const favorite = reader.favoriteBooks.length;

favorite > 1

? console.log(`${reader.name} tem ${favorite} livros favoritos.`)
: console.log(`${reader.name} tem ${favorite} livro.`);