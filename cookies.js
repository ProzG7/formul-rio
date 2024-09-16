document.addEventListener('DOMContentLoaded', function() {
    const msgCookies= document.getElementById('cookies-msg');
    const aceitocookies = document.getElementById('aceitocookies');

    function mostrarCookies(){

        msgCookies.classList.add('mostrar')
    }

    function esconderCookies(){
        msgCookies.classList.remove('mostrar')
    }

    mostrarCookies();

    aceitocookies.addEventListener('click', function() { 

    });
})
