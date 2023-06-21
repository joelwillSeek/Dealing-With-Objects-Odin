// function Book(title, author, page, read) {
//   this.title = title;
//   this.author = author;
//   this.page = page;
//   this.read = read;
//   this.info = () => `The ${title} by ${author}, ${page} pages, ${read}`;
// }

// const rick = new Book("rich something", "no idea", 300, "ya i did");
// let header = document.createElement("h1");
// header.textContent = "rick.info";
// console.log(header);
// let body = document.body;
// body.appendChild(header);

let libraryBooks = [];

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
  this.info = () => `The ${title} by ${author}, ${page} pages, ${read}`;
}

const userCreateBook = (title, author, page, read) =>
  libraryBooks.push(new Book(title, author, page, read));
