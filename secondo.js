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