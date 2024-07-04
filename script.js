//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    let opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    let x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    let x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}


//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso1");
        document.getElementById("rj").classList.add("barra-progreso1");
        document.getElementById("ps").classList.add("barra-progreso1");
    }
}

function enviarWhatsApp() {
    const nombre = encodeURIComponent(document.getElementById("nombre").value);
    const mensaje = encodeURIComponent(document.getElementById("mensaje").value);
    const email = encodeURIComponent(document.getElementById("email").value);

    const numeroWhatsapp = "2612201520";
    const mensajeWhatsApp = `¡Hola! Soy ${nombre}, mi email es: ${email} y mi consulta es: ${mensaje}`;

    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${mensajeWhatsApp}target="_blank"`;
    window.location.href = url;
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
  }

  
  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;
    const imagesToShow = 6;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % (totalImages - imagesToShow + 1);
        updateCarousel();
    }, 2000); // Cambia cada 3 segundos (ajusta según tu preferencia)

    function updateCarousel() {
        const translateValue = -currentIndex * (100 / imagesToShow);
        carousel.style.transform = `translateX(${translateValue}%)`;
    }
});

