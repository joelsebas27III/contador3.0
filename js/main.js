let fecha = new Date(2025, 0, 1, 0, 0); // Fecha objetivo
let msFecha = fecha.getTime(); // Fecha en milisegundos

let parrafoDias = document.querySelector("#dias");
let parrafoHoras = document.querySelector("#horas");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoSegundos = document.querySelector("#segundos");
let spanFecha = document.querySelector("#fecha");
let cuentaAtras = document.querySelector("#cuenta-atras");
let felizAnio = document.querySelector("#feliz-anio"); // Seleccionar el div de Feliz Año
let audio = document.getElementById("fuegos-artificiales"); // Elemento de audio
// Mostrar la fecha objetivo
spanFecha.innerText = fecha.toLocaleDateString();

// Función para agregar el cero delante de los números menores a 10
function agregarCero(valor) {
    return valor < 10 ? "0" + valor : valor;
}

let intervalo = setInterval(() => {
    let hoy = new Date().getTime(); // Hora actual
    let distancia = msFecha - hoy; // Diferencia en milisegundos

    let msPorDia = 1000 * 60 * 60 * 24;
    let msPorHora = 1000 * 60 * 60;
    let msPorMinuto = 1000 * 60;
    let msPorSegundo = 1000;

    let dias = Math.floor(distancia / msPorDia);
    let horas = Math.floor((distancia % msPorDia) / msPorHora);
    let minutos = Math.floor((distancia % msPorHora) / msPorMinuto);
    let segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo);

    // Actualizar los elementos con el tiempo restante
    parrafoDias.innerText = dias;
    parrafoHoras.innerText = agregarCero(horas);
    parrafoMinutos.innerText = agregarCero(minutos);
    parrafoSegundos.innerText = agregarCero(segundos);

    // Si la cuenta atrás termina
    if (distancia < 0) {
        clearInterval(intervalo);
        cuentaAtras.style.display = "none"; // Ocultar la cuenta atrás
        felizAnio.style.display = "block"; // Mostrar el mensaje de Feliz Año
        by.style.display = "none"; // Ocultar by
        fechita.style.display="none"; //oculta fecha
        audio.play(); // Reproducir el sonido de los fuegos artificiales
    }

}, 1000); // Actualizar cada segundo
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 200
            }
        },
        color: {
            value: "#e1ff00"  // Color del confeti
        },
        shape: {
            type: "circle",  // Partículas redondas
            stroke: {
                width: 0,
                color: "#fff"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 1
            }
        },
        line_linked: {
            enable: false  // No queremos enlaces entre las partículas
        },
        move: {
            enable: true,
            speed: 2,
            direction: "bottom",  // Las partículas caen hacia abajo
            random: true,
            bounce: false
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"  // Repele las partículas al pasar el mouse sobre ellas
            },
            onclick: {
                enable: true,
                mode: "push"  // Permite que se agreguen más partículas al hacer clic
            }
        }
    }
});
