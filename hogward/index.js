export default Estudiante = () => {
  let Estudiante = {
    Nombre: "",
    edad: 0,
    familia: "",
    linaje: "",
    casa: "",
    animal_patronus: "",
    cualidades: "Justicia, Lealtad, Paciencia",
  };

  const container = document.querySelector(".container");
  const info = document.querySelector(".info");
  const nombre = document.querySelector("#nombre");
  const edad = document.querySelector("#edad");
  const apellido = document.querySelector("#apellido");
  const linaje = document.querySelector("#linaje");
  let boton = document.querySelector("#boton");

  boton.addEventListener("click", () => {
    let ingresa = document.querySelector("#input");
    Estudiante.Nombre = ingresa.value;
    nombre.textContent = `Nombre: ${Estudiante.Nombre}`;
  });

  boton = document.querySelector("#boton2");
  boton.addEventListener("click", () => {
    ingresa = document.querySelector("#input2");
    Estudiante.edad = ingresa.value;
    edad.textContent = `Edad: ${Estudiante.edad}`;
  });

  boton = document.querySelector("#boton3");
  boton.addEventListener("click", () => {
    ingresa = document.querySelector("#input3");
    Estudiante.familia = ingresa.value;
    apellido.textContent = `Apellido: ${Estudiante.familia}`;
  });

  select = document.querySelector("#select");
  select.addEventListener("change", () => {
    Estudiante.linaje = select.value;
    linaje.textContent = `Linaje: ${Estudiante.linaje}`;
  });

  return Estudiante;
};

//PASO 1

/* 



//PASO 2
let clases={
transformaciones: "Profesor Kevin Slughorn",
herbologia: "Profesor Maria Umbridge",
pociones: "Profesor Liliana McGonagall",
encantamientos: "Profesora Jackie",
defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
animalesMagicos: "Profesor David Filch",
historiaDeMagia: "Profesor Ronald Sprout"}

//PASO 3
function sombreroSeleccionador(){

let Gryffindor= "Valor, fuerza, audacia";
let Hufflepuff="Justicia, Lealtad, Paciencia";
let Ravenclaw="Creatividad, Erudición, Inteligencia";
let Slytherin="Ambición, Determinación, Astucia";



if ((Estudiante.cualidades==Gryffindor)&&(Estudiante.linaje=="Mestizo" || Estudiante.linaje=="muggle"||Estudiante.linaje=="Sangre pura")){
    Estudiante.casa="Gryffindor";
}else if((Estudiante.cualidades==Hufflepuff)&&(Estudiante.linaje=="Mestizo" ||Estudiante.linaje=="muggle")){
    Estudiante.casa="Hufflepuff";
}else if ((Estudiante.cualidades==Ravenclaw)&&(Estudiante.linaje=="Mestizo" ||Estudiante.linaje=="muggle"||Estudiante.linaje=="Sangre pura")){
    Estudiante.casa="Ravenclaw";
}else if ((Estudiante.cualidades==Slytherin)&&(Estudiante.linaje=="Sangre pura")){
    Estudiante.casa="Slytherin";
}
}
sombreroSeleccionador()

//PASO 4
class claseTransformaciones {
    constructor(profesor, horario, rastrearBoggarts) {
        this.profesor = profesor;
        this.horario = horario;
        this.rastrearBoggarts = rastrearBoggarts;
    }

    realizarTransformacionRiddikulus() {
        let Boggart = Math.round(Math.random() * 2);

        if (Boggart == 1 || Boggart == 0) {
            this.rastrearBoggarts = true;
            console.log("hay un Boggarts");
            this.enfrentarBoggart();
        } else {
            console.log("no hay un Boggarts");
            console.log("El profesor no entiende por qué no se muestra el Boggart");
        }
    }

    enfrentarBoggart() {
        if (this.rastrearBoggarts === true) {
            let BoggartsOriginal = "miedos";
            let miedo = prompt("¿Cuál es tu mayor miedo?");
            console.log("el Boggart se muestra en su forma original " + BoggartsOriginal);
            console.log("el Boggart se transforma en " + miedo);
            let transformacion = "";
            while (transformacion !== "ridiculo") {
                let ataque = prompt("¿Atacar con Riddikulus para transformarlo? (s/n)").toLowerCase();
                if (ataque === "s") {
                    console.log("el Boggart se transforma en algo ridículo");
                    transformacion = "ridiculo";
                } else if (ataque === "n") {
                    console.log("el profesor " + this.profesor + " convierte al Boggart por ti en algo ridículo");
                    transformacion = "ridiculo";
                }
            }
        }
    }
}

let boggartEjemplo = new claseTransformaciones("Severus Snape", "19:00", false);

boggartEjemplo.realizarTransformacionRiddikulus();


//PASO 5

let defensaContraLasArtesOscuras={

   animales:["ciervo","lobo","oso","serpiente","murcielago","nutria","perro","tejon","pegaso"]
}

function animalPatronus(){
    let animalEncantamiento=Math.round(Math.random()*8)
    console.log(animalEncantamiento)
    
    Estudiante.animal_patronus = defensaContraLasArtesOscuras.animales[animalEncantamiento]
}
animalPatronus()

//PASO 6
console.log(Estudiante)    */
