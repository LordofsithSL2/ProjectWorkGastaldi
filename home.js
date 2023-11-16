
// Top-bar transizione
window.addEventListener("scroll", function() {
 var header = document.querySelector(".top-bar");
 header.classList.toggle("sticky", window.scrollY > 0);
});

// Numero 0 a tot
document.addEventListener('DOMContentLoaded', function() {
    var numero = document.getElementById('numero');
    var contatore = 0;

    var intervallo = setInterval(function() {
        if(contatore <= 10) {
            numero.textContent = contatore++;
        } else {
            clearInterval(intervallo);
        }
    }, 100); // 100 = 100 millisecondi = 0.1 secondi
});

var i = 0;
var txt = "Uso pro capite di acqua potabile per persona nei comuni della Regione Liguria"; /* Il testo che vuoi che appaia come se fosse digitato */
var speed = 50; /* La velocità di digitazione, in millisecondi */

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".paragrafo-centrale").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter); // Avvia la funzione typeWriter quando la pagina viene caricata


// Seleziona l'elemento che vuoi animare
var elemento = document.querySelector(".box-link3");

// Crea un nuovo Intersection Observer
var observer = new IntersectionObserver(function(entries) {
    // Loop attraverso le entries
    entries.forEach(function(entry) {
        // Se l'elemento è nel viewport
        if (entry.isIntersecting) {
            // Aggiungi la classe CSS per l'animazione
            elemento.classList.add('up');
        } else {
            // Rimuovi la classe CSS per l'animazione
            elemento.classList.remove('up');
        }
    });
});

// Osserva l'elemento
observer.observe(elemento);
