function mostrarPregunta() {
    const musica = document.getElementById('musica-fondo');
    
    // Esto hace que la música empiece justo al dar clic en Continuar
    musica.play().catch(error => {
        console.log("El navegador aún pide un clic más:", error);
    });

    // Cambia de pantalla
    document.getElementById('bienvenida').classList.add('oculto');
    document.getElementById('pregunta').classList.remove('oculto');
}
// Lógica del botón que huye
function moverBotonNo() {
    const btnNo = document.getElementById('btn-no');
    const btnSi = document.getElementById('btn-si');
    
    // 1. Lo volvemos 'fixed' para que pueda saltar por toda la ventana
    btnNo.style.position = 'fixed';
    
    // 2. Definimos un margen de seguridad (puedes subirlo a 150 si sientes que aún se sale un poco)
    const margen = 100; 

    // 3. Calculamos límites reales: (Ancho total - Ancho del botón - Margen)
    const anchoMax = window.innerWidth - btnNo.offsetWidth - margen;
    const altoMax = window.innerHeight - btnNo.offsetHeight - margen;

    // 4. Generamos posiciones aleatorias dentro de esos límites
    // Usamos Math.max para asegurar que nunca sea menor al margen
    const x = Math.max(margen, Math.floor(Math.random() * anchoMax));
    const y = Math.max(margen, Math.floor(Math.random() * altoMax));

    // 5. Aplicamos las coordenadas
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";

    // 6. Lógica para que el botón SÍ crezca (se mantiene igual)
    const estiloSi = window.getComputedStyle(btnSi);
    const tamanoActual = parseFloat(estiloSi.fontSize);
    btnSi.style.fontSize = (tamanoActual + 5) + "px";
    btnSi.style.padding = (tamanoActual / 2 + 5) + "px " + (tamanoActual + 10) + "px";
}

// Lógica del Universo Final
function aceptarPropuesta() {
    // Escondemos la sección de la pregunta
    document.getElementById('pregunta').classList.add('oculto');
    
    // Mostramos la pantalla de transición (la que acabas de crear en el HTML)
    document.getElementById('transicion').classList.remove('oculto');
}
function mostrarUniverso() {
    // Escondemos la transición
    document.getElementById('transicion').classList.add('oculto');
    // Mostramos el universo final
    document.getElementById('universo').classList.remove('oculto');
    
    // Aquí es donde lanzas la función que crea las palabras alrededor del agujero negro
    // Si tu función se llama 'crearUniverso', llámala aquí:
    if (typeof crearUniverso === 'function') {
        crearUniverso();
    }
}


function crearUniverso() {
    const contenedor = document.getElementById('contenedor-palabras');
    const palabras = [
        "Mi cielo", "Mi vida", "Eternidad", "Contigo", 
        "Siempre", "Felicidad", "Mi razón", "Universo", "Mi sol",
        "Amor", "Eres todo", "Mi mundo", "Corazón", "Libertad"
    ];

    palabras.forEach((texto, index) => {
        let span = document.createElement('span');
        span.innerText = texto;
        span.className = 'palabra';
        
        // Valores aleatorios para la órbita
        const duracion = Math.random() * 10 + 5; // Entre 5 y 15 segundos
        const distancia = Math.random() * 150 + 100; // Radio de la órbita
        const retraso = Math.random() * -20; // Para que no empiecen todas juntas

        // Aplicamos la animación directamente con JS para que sea única por palabra
        span.style.animation = `orbitar ${duracion}s linear infinite`;
        span.style.animationDelay = `${retraso}s`;
        
        // Usamos una variable de CSS para la distancia de la órbita
        span.style.setProperty('--distancia', `${distancia}px`);
        
        contenedor.appendChild(span);
    });
}
// Función para activar la musica
function reproducirMusica() {
    const musica = document.getElementById('musica-fondo');
    musica.volume = 0.5; // Forzamos el volumen al 50%
    
    musica.play().then(() => {
        console.log("Sonando perfectamente");
    }).catch(error => {
        console.log("Bloqueo de reproducción:", error);
    });
}