import { Estudiante } from '../index.js';

console.log(Estudiante)

const contenedor = document.querySelector(".contenedor1");
const atributos1 = document.querySelector(".cualidades1");
const atributos2 = document.querySelector(".cualidades2");
const atributos3 = document.querySelector(".cualidades3");
const selecImag = document.querySelectorAll(".imagen");

let Gryffindor = ["valor", "fuerza", "audacia"];
let Hufflepuff = ["Justicia, Lealtad, Paciencia"];
let Ravenclaw = ["Creatividad, Erudición, Inteligencia"];
let Slytherin = ["Ambición, Determinación, Astucia"];
let contador = 0;
arrayCualidades = [
  "Valor",
  "fuerza",
  "audacia",
  "Justicia",
  "Lealtad",
  "Paciencia",
  "Creatividad",
  "Erudición",
  "Inteligencia",
  "Ambición",
  "determinación",
  "Astucia",
];
arrayEstudiantes = [];
nuevaArray = [];

function handleClick() {
  arrayEstudiantes.push(this.alt);
  this.classList.toggle("cambioColor");
  console.log(arrayEstudiantes);

  for (let i of arrayEstudiantes) {
    if (i == Gryffindor[i]){
      if (i == j) {
        //console.log(i);
        //console.log(j);
        //nuevaArray.push(i)
      }
    }
  }
  console.log(nuevaArray);

  if (nuevaArray.join(" ") == Gryffindor.join(" ")) {
    alert("Usted pertenece a Gryffindor");
  }

  if (this.classList.contains("cambioColor")) {
    contador++;
  } else {
    contador--;
  }

  if (contador === 3) {
    selecImag.forEach((img) => {
      img.removeEventListener("click", handleClick);
    });
  } else {
    selecImag.forEach((img) => {
      img.addEventListener("click", handleClick);
    });
  }
}

selecImag.forEach((divImg) => {
  divImg.addEventListener("click", handleClick);
});
