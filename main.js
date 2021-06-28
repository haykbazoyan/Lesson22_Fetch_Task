let akita = document.querySelector("#akita");
let beagle = document.querySelector("#beagle");
let dalmatian = document.querySelector("#dalmatian");
let labrador = document.querySelector("#labrador");
let pug = document.querySelector("#pug");
let retriever = document.querySelector("#retriever");

let random = (int) => Math.floor(Math.random() * int);
let allDogList;
let imgContainer = document.querySelector(".imgContainer");

akita.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breed/hound/afghan/images")
    .then((responsive) => {
      return responsive.json();
    })
    .then((resp) => {
      //   debugger;
      imgContainer.removeChild(imgContainer.childNodes[0]);
      let img = new Image();
      img.src = resp.message[random(238)];
      imgContainer.appendChild(img);
    });
});

beagle.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breed/beagle/images")
    .then((responsive) => {
      return responsive.json();
    })
    .then((resp) => {
      imgContainer.removeChild(imgContainer.childNodes[0]);
      let img = new Image();
      img.src = resp.message[random(198)];
      imgContainer.appendChild(img);
    });
});

dalmatian.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breed/dalmatian/images")
    .then((responsive) => {
      return responsive.json();
    })
    .then((resp) => {
      imgContainer.removeChild(imgContainer.childNodes[0]);
      let img = new Image();
      img.src = resp.message[random(1)];
      imgContainer.appendChild(img);
    });
});

labrador.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breed/labrador/images")
    .then((responsive) => {
      return responsive.json();
    })
    .then((resp) => {
      imgContainer.removeChild(imgContainer.childNodes[0]);
      let img = new Image();
      img.src = resp.message[random(182)];
      imgContainer.appendChild(img);
    });
});

pug.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breed/pug/images")
    .then((responsive) => {
      return responsive.json();
    })
    .then((resp) => {
      imgContainer.removeChild(imgContainer.childNodes[0]);
      let img = new Image();
      img.src = resp.message[random(236)];
      imgContainer.appendChild(img);
    });
});

retriever.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breed/retriever/images")
    .then((responsive) => {
      return responsive.json();
    })
    .then((resp) => {
      //   debugger;
      imgContainer.removeChild(imgContainer.childNodes[0]);
      let img = new Image();
      img.src = resp.message[random(638)];
      imgContainer.appendChild(img);
    });
});
