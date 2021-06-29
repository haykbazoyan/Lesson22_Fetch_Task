const inputText = document.querySelector(".textInput");
const enterBtn = document.querySelector(".enterBtn");

let title = document.querySelector(".title");
let author = document.querySelector(".author");
let year = document.querySelector(".year");
let subject = document.querySelector(".subject");

const link = "http://openlibrary.org/search.json?q=";

enterBtn.addEventListener("click", () => {
  console.log(inputText.value);
  let bookName = inputText.value.toLowerCase().split(" ").join("+");
  let res = link + bookName;

  title.innerText = "";
  author.innerText = "";
  year.innerText = "";
  subject.innerText = "";

  fetch(res)
    .then((response) => {
      return response.json();
    })
    .then((resp) => {
      title.innerText = resp.numFound;
      author.innerText = resp.docs[0].author_name;
      year.innerText = resp.docs[0].first_publish_year;

      let subjectArray = [];

      [...subjectArray] = [
        resp.docs[0].subject[0],
        resp.docs[0].subject[1],
        resp.docs[0].subject[2],
        resp.docs[0].subject[3],
        resp.docs[0].subject[4],
      ];
      subject.innerText = subjectArray.join(", ");
    });
});
