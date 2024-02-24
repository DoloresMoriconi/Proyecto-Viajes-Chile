//tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

////accion para aparecer y desaparecer el contenido de todas las tarjetas, cuando el usuario haga doble clic en caalquiera de los tres bloques de los iconos.
document.addEventListener("DOMContentLoaded", function() {
    const iconSection = document.getElementById("caja-de-texto");

    iconSection.addEventListener("dblclick", function() {
        const textElements = iconSection.querySelectorAll("p");
        textElements.forEach(element => {
            element.style.display = element.style.display === "none" ? "" : "none";
        });
    });
});

//accion para aparecer y desaparecer el contenido de todas las tarjetas, cuando el usuario haga clic en caalquiera de las cuatro imagenes.
document.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll(".card");
    let bodies = document.querySelectorAll(".card-body");

    cards.forEach(card => {
        let img = card.querySelector(".card-img-top");

        img.addEventListener("click", function() {
            bodies.forEach(body => {
                body.classList.toggle("d-none");
            });
        });
    });
});

//accion para que con un clic en enviar se notifique un agradecimiento por contactarse y confirmando quue se le respondera.
$("#envio-contacto").on('click', function () {
    alert("Gracias por contactarte con Viajes Chile, te responderemos a la brevedad.");
});

document.addEventListener("DOMContentLoaded", function() {
    const iconSection = document.getElementById("caja-de-texto");

    iconSection.addEventListener("dblclick", function() {
        const textElements = iconSection.querySelectorAll("p");
        textElements.forEach(element => {
            element.style.display = element.style.display === "none" ? "" : "none";
        });
    });
});