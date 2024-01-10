let persons = [{
    nombre: "Anthony",
    correo: "anthonymunoz@gmail.com",
    password: "password"
},
{
    nombre: "juana",
    correo: "juanalopez@gmail.com",
    password: "password2"
}]
let usuario = sessionStorage.getItem("nombre");
if(usuario!=null){
    location.href="./home.html"
}

function loginSession() {
    let user = document.getElementById("user")
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let hidden2 = document.querySelectorAll("hidden2")
    let hidden = document.querySelector(".oculto");
    let user_valid = false


    if (email.value != "") {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
    } else {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
    }

    if (password.value != "") {
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
    } else {
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");
    }
    if (user.value != "") {
        user.classList.add("is-valid");
        user.classList.remove("is-invalid")
    } else {
        user.classList.add("is-invalid");
        user.classList.remove("is-valid");
    }

    persons.forEach(function (person) {
        if (
            email.value == person.correo &&
            password.value == person.password &&
            user.value == person.nombre
        ) {
            user_valid = true;
            sessionStorage.setItem("nombre", person.nombre);
            location.href = "./home.html";
        }
    });

    if (!user_valid) {
        hidden.classList.remove("hidden");
    }
}