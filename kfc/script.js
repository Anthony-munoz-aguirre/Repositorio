let body = document.getElementById("body");

let hamburgers = [
    { src: "./images/hamburguesa-1.webp", price: "$8.900", name: "BBQ Crunch", description: "1 Sándwich BBQ Crunch(1 dressed chicken breast fillet)" },
    { src: "./images/hamburguesa-2.webp", price: "$15.900", name: "Kentucky Sandwich", description: "1 Kentucky hamburger/ Sandwich (1 dressed chicken breast fillet),pickles,..." },
    { src: "./images/hamburguesa-3.webp", price: "$15.900", name: "Combo BBQ Crunchh", description: "1 Sándwich BBQ Crunch(1 dressed chicken breast fillet)+small potato + 1 soda..." },
    { src: "./images/hamburguesa-4.webp", price: "$16.900", name: "Kentucky Coronel Sandwich", description: "1 Kentucky Coronel hamburger/ Sandwich (1 dressed chicken breast fillet),salad" },
    { src: "./images/hamburguesa-5.webp", price: "$21.900", name: "Combo Kentucky Sandwich", description: "1 Kentucky hamburger/ Sandwich (1 dressed chicken breast fillet),pickles,..." },
    { src: "./images/hamburguesa-6.webp", price: "$22.900", name: "Combo Kentucky Coronel Sandwich", description: "1 Kentucky Coronel hamburger/ Sandwich (1 dressed chicken breast fillet),salad" },
    { src: "./images/hamburguesa-7.webp", price: "$23.900", name: "Sandwich Crispy BBQ", description: "1 Sándwich Crispy BBQ(1 extra large breaast fillet), triple breaded, onion crisp..." },
    { src: "./images/hamburguesa-8.webp", price: "$29.900", name: "Combo Sandwich Crispy BBQ", description: "1 Sándwich Crispy BBQ(1 extra large breaast fillet), triple breaded, onion crisp..." },
];

// Container
let container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);
let contador = 0;

// Row
let header = document.createElement("div");
header.classList.add("row", "d-flex", "justify-content-evenly", "align-items-center");
container.appendChild(header);

// Column 1
let col1 = document.createElement("div");
col1.classList.add("col-md-4", "mt-5");
header.appendChild(col1);

// Logo
let logo = document.createElement("img");
logo.classList.add("img", "w-50");
logo.setAttribute("src", "images/logo.png");
col1.appendChild(logo);

// Column 2
let col2 = document.createElement("div");
col2.classList.add("col-md-4", "mt-5");
header.appendChild(col2);

// Language
let language = document.createElement("select");
language.id = "language";
language.classList.add("form-select");
col2.appendChild(language);

let selectLanguage = document.createElement("option");
selectLanguage.innerText = "Seleccione un idioma";
language.appendChild(selectLanguage);

let esLanguage = document.createElement("option");
esLanguage.innerText = "Español";
language.appendChild(esLanguage);

let enLanguage = document.createElement("option");
enLanguage.innerText = "Inglés";
language.appendChild(enLanguage);

// Column 3
let col3 = document.createElement("div");
col3.classList.add("col-md-4", "mt-5");
header.appendChild(col3);

// Theme
let theme = document.createElement("select");
theme.classList.add("form-select");
col3.appendChild(theme);

let selectTheme = document.createElement("option");
selectTheme.innerText = "Seleccione un tema";
theme.appendChild(selectTheme);

let lightTheme = document.createElement("option");
lightTheme.innerText = "claro";
theme.appendChild(lightTheme);

let darkTheme = document.createElement("option");
darkTheme.innerText = "oscuro";
theme.appendChild(darkTheme);

theme.addEventListener("change", () => {
    let selectedTheme = theme.value;
    changeTheme(selectedTheme);
});

language.addEventListener("change", () => {
    ChangeLanguage();
});

for (let a = 0; a < 2; a++) {
    // Row 2
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (let b = 0; b < 4; b++) {
        // Columns 4
        let col = document.createElement("div");
        col.classList.add("col-md-3", "mt-5");
        row.appendChild(col);

        for (let c = 0; c < 1; c++) {
            // Cards 1
            let card = document.createElement("div");
            card.classList.add("card", "h-100");
            col.appendChild(card);

            let hamburger = document.createElement("img");
            hamburger.src = hamburgers[contador].src;
            card.appendChild(hamburger);

            let price = document.createElement("h4");
            price.textContent = hamburgers[contador].price;
            card.appendChild(price);

            let name = document.createElement("h3");
            name.textContent = hamburgers[contador].name;
            card.appendChild(name);

            let description = document.createElement("p");
            description.textContent = hamburgers[contador].description;
            card.appendChild(description);

            contador++;

            let buyButton = document.createElement("button");
            buyButton.classList.add("btn", "btn-danger", "mt-auto", "mb-5");
            buyButton.innerText = "Comprar";
            card.appendChild(buyButton);
        }
    }
}

function changeTheme(selectedTheme) {
    if (selectedTheme == "light") {
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-free");
        localStorage.setItem("guardarDatos", "light");
    } else if (selectedTheme == "dark") {
        body.classList.add("theme-dark");
        body.classList.remove("theme-light");
        body.classList.remove("theme-free");
        localStorage.setItem("guardarDatos", "dark");
    } else if (selectedTheme == "free") {
        body.classList.add("theme-free");
        body.classList.remove("theme-light");
        body.classList.remove("theme-dark");
        localStorage.setItem("guardarDatos", "free");
    }
}

try {
    let dato = localStorage.getItem("guardarDatos");
    if (dato == "light") {
        body.classList.remove("theme-dark");
        body.classList.add("theme-light");
        body.classList.remove("theme-free");
    } else if (dato == "dark") {
        body.classList.add("theme-dark");
        body.classList.remove("theme-light");
        body.classList.remove("theme-free");
    } else if (dato == "free") {
        body.classList.add("theme-free");
        body.classList.remove("theme-light");
        body.classList.remove("theme-dark");
    }
} catch (error) {
    console.error(error);
}

function ChangeLanguage() {
    let language = document.getElementById("language").value;
    let contador = 0;
    if (language == "en") {
        const arrayP = [
            "1 Sándwich BBQ Crunch(1 dressed chicken breast fillet)",
            "1 Kentucky hamburger/ Sandwich (1 dressed chicken breast fillet),pickles,...",
            "1 Sándwich BBQ Crunch(1 dressed chicken breast fillet)+small potato + 1 soda...",
            "1 Kentucky Coronel hamburger/ Sandwich (1 dressed chicken breast fillet),salad",
            "1 Kentucky hamburger/ Sandwich (1 dressed chicken breast fillet),pickles,...",
            "1 Kentucky Coronel hamburger/ Sandwich (1 dressed chicken breast fillet),salad",
            "1 Sándwich Crispy BBQ(1 extra large breaast fillet), triple breaded, onion crisp..",
            "1 Sándwich Crispy BBQ(1 extra large breaast fillet), triple breaded, onion crisp..",
        ];

        const p = document.querySelectorAll(".p1");
        const array = Array.from(p);
        array.forEach(cambio => {
            cambio.innerText = arrayP[contador];
            contador++;
        });

        const button = document.querySelectorAll("button");
        const array2 = Array.from(button);
        array2.forEach(cambio => {
            cambio.innerText = "Buy";
        });
    } else if (language == "es") {
        const arrayP = [
            "1 Sándwich BBQ Crunch (1 filete de pollo apanado)",
            "1 Kentucky hamburguesa/ Sandwich (1 filete de pechuga de pollo apanado),pepinillos,...",
            "1 Sándwich BBQ Crunch(1 filete de pollo apanado) +1 Papa Pequeña + 1 Gaseosa PET...",
            "1 Kentucky Coronel hamburguesa/Sandwich (1 filete de pechuga de pollo apanado),Ensalada...",
            "1 Kentucky hamburguesa/Sandwich (1 Filete de pechuga de pollo apanado),pepinillos,...",
            "1 Kentucky Coronel hamburguesa/Sanwich (1 Filete de pechuga de pollo apanado), Ensalada...",
            "1 Sándwich Crispy BBQ(1 Filete de pechuga extra grande), triple empanizado, cebolla crisp..",
            "1 Sándwich Crispy BBQ (1 Filete de pechuga extra grande), triple empanizado, cebolla crisp...",
        ];

        const p = document.querySelectorAll(".p1");
        const array = Array.from(p);
        array.forEach(cambio => {
            cambio.innerText = arrayP[contador];
            contador++;
        });

        const button = document.querySelectorAll("button");
        const array2 = Array.from(button);
        array2.forEach(cambio => {
            cambio.innerText = "Comprar";
        });
    }
}
