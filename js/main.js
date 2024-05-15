const poleras = [
    { nombre: "ArenaBreakOut", precioCosto: 10000 },
    { nombre: "Healthy Recover", precioCosto: 12000 },
    { nombre: "Bosses", precioCosto: 15000 },
    { nombre: "Vision Helment", precioCosto: 17000 },
    { nombre: "Meme ArenaBreakout", precioCosto: 8000 },
    { nombre: "TierArmor 6", precioCosto: 9000 },
    { nombre: "Meme Arenoso", precioCosto: 5000 },
];

poleras.pop();


function calcularPrecioFinal(precioCosto) {
    // Agregar un 40% al precio de costo
    return precioCosto * 1.40;
}

// Calcular el precio final para cada polera y actualizar el array
poleras.forEach(polera => {
    polera.precioFinal = calcularPrecioFinal(polera.precioCosto).toFixed(0); // Redondear a dos decimales
});

// Función para generar las tarjetas HTML
function generarTarjetas() {
    const container = document.getElementById('poleras-container');
    poleras.forEach((polera, index) => {
        const cardHTML = `
        <div class="col-12 col-md-6 col-lg-4 mb-3 mt-3">
          <div class="car?"d">
            <img src="../img/soldier-arena${index}.jpg" class="card-img-top" alt="${polera.nombre}">
            <div class="card-body bg-dark text-warning">
              <h5 class="card-title">${polera.nombre}</h5>
              <p class="card-text text-white">$${polera.precioFinal}</p>
              <button class="btn btn-warning btn-comprar">Comprar</button>
              <button class="btn btn-secondary btn-agregar">Agregar al carrito</button>
            </div>
          </div>
        </div>
      `;
        container.innerHTML += cardHTML;
    });
}

// Llamar a la función generarTarjetas cuando la ventana se cargue
window.onload = generarTarjetas;

class WelcomeNewUser {
    constructor(nameUser, colorUser, clanUser) {
        this.nameUser = nameUser;
        this.colorUser = colorUser;
        this.clanUser = clanUser;

    }



    thanks() {
        // Retorna un string que contiene el HTML para el mensaje de agradecimiento
        return `
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-8 col-lg-6 mx-auto">
                    <div class="card text-center text-white" style="background-color: ${this.colorUser};">
                        <div class="card-body">
                            <h2 class="card-title">¡Bienvenido/a, ${this.nameUser}!</h2>
                            <p class="card-text text-warning">Gracias por unirte al clan ${this.clanUser}. ¡Estamos emocionados de tenerte a bordo!</p>
                            <a href="#" class="btn btn-${this.color} text-white">Explorar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

}

const welcomeAdmin = new WelcomeNewUser('Javier', 'black', 'Rolling Stones');
document.getElementById('welcomeMessage').innerHTML = welcomeAdmin.thanks();

/* let invitado = 'invitado';

document.getElementById('invitado').innerHTML = '<h2>' + invitado + '</h2>';
 */



//lo intente pero no pude
/* const comentarios = []

const agregarComentario = document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    localStorage.setItem('email', email);
    localStorage.setItem('comment', comment);

    const comentario = { email: email, comment: comment }
    comentarios.push(comentario)
});

agregarComentario()


document.getElementById('confirmation').textContent = `Gracias por tu comentario, ${localStorage.getItem('email')}. Tu idea de ropa fue: ${localStorage.getItem('comment')}`;
 */