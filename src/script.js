import "./style.css";

//global variable
let library = [];
let hiddenForm = true; //to tell if the form is hidden or not

//getters
/**
 * @type {HTMLInputElement}
 */
let titleForm = document.querySelector("nav form input#title");
let authorForm = document.querySelector("nav form input#author");
let pagesForm = document.querySelector("nav form input#pages");
/**
 * @type {HTMLInputElement}
 */
let readForm = document.querySelector("nav form input#read");
let submitForm = document.querySelector('nav form input[type="submit"]');
let hideOrShowForm = document.querySelector("nav button#hideshow");
/**
 * @type {HTMLFormElement}
 */
let bookForm = document.querySelector("nav form");
let bookShelf = document.querySelector("main");

//listeners
submitForm.addEventListener("click", (event) => {
  event.preventDefault();

  if (checkInputFieldsIfNull()) {
    let newBook = new Book(
      titleForm.value,
      authorForm.value,
      pagesForm.value,
      readForm.checked
    );
    library.push(newBook);
    refreshShelf();
    console.log(library);
  } else {
    alert("Cant leave form empty.");
  }
});

// When the element is visible, first animate the opacity, the n, when that’s finished, make it display: none.
// When the element is invisible, first make it display: block, then (while it’s still visually hidden, but existing on the page), animate the opacity.

hideOrShowForm.addEventListener("click", () => {
  if (hiddenForm) {
    bookForm.classList.remove("hiddenform");
    bookForm.setAttribute("open", "");

    setTimeout(() => {
      bookForm.removeAttribute("close");
    }, 20);
  } else {
    bookForm.removeAttribute("open");
    bookForm.setAttribute("close", "");
    bookForm.addEventListener(
      "transitionend",
      () => {
        bookForm.classList.add("hiddenform");
      },
      { once: true }
    );
  }
  hiddenForm = !hiddenForm;
});

//functions
const checkInputFieldsIfNull = () => {
  if (
    titleForm.value == "" ||
    authorForm.value == "" ||
    pagesForm == "" ||
    readForm == ""
  )
    return false;

  return true;
};

const refreshShelf = () => {
  //for every object there should be a card
  //destroy existing shelf
  while (bookShelf.firstChild) {
    bookShelf.removeChild(bookShelf.firstChild);
  }

  library.forEach(
    /**
     *
     * @param {Book} value
     */
    (value, index) => {
      //create elements for card
      let card = document.createElement("div");
      let cardTitle = document.createElement("h1");
      let cardAuthor = document.createElement("h2");
      let cardPages = document.createElement("p");
      let cardRead = document.createElement("p");
      let removeCard = document.createElement("button");
      //add functionality and attributes
      card.setAttribute("class", "card");
      cardTitle.textContent = value.title;
      cardAuthor.textContent = value.author;
      cardPages.textContent = value.pages;
      removeCard.textContent = "Remove";
      removeCard.addEventListener("click", () => {
        let buttonIndex = index;
        let thisButton = card;
        library.splice(buttonIndex, 1);
        bookShelf.removeChild(thisButton);
      });
      if (value.read) {
        cardRead.textContent = "Have Been Read";
      } else if (!value.read) {
        cardRead.textContent = "Haven't Been Read";
      } else {
        console.log("Error With toggle");
      }
      //append to card
      card.appendChild(cardTitle);
      card.appendChild(cardAuthor);
      card.appendChild(cardPages);
      card.appendChild(cardRead);
      card.appendChild(removeCard);
      //append card to shelf
      bookShelf.appendChild(card);
    }
  );
};

//constructor for books
/**
 *
 * @param {String} title
 * @param {String} author
 * @param {Number} pages
 * @param {Boolean} read
 */
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}
