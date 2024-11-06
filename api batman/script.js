
// Función para cargar los datos del archivo JSON
async function loadCharacters() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        displayCharacters(data.personajes);
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

// Función para mostrar los personajes en el contenedor
function displayCharacters(personajes) {
    const container = document.getElementById('card-container');
    container.innerHTML = '';

    personajes.forEach(personaje => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${personaje.imagen}" alt="${personaje.nombre}">
            <h2>${personaje.nombre}</h2>
            <p>${personaje.descripcion}</p>
        `;
        container.appendChild(card);
    });
}

// Llama a la función de carga al inicio
loadCharacters();

// Función para filtrar las tarjetas
function filterCards() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const name = card.querySelector('h2').textContent.toLowerCase();
        if (name.includes(searchInput)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Mostrar todas las tarjetas inicialmente
async function loadCharacters() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        displayCharacters(data.personajes);
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

function displayCharacters(personajes) {
    const container = document.getElementById('card-container');
    container.innerHTML = '';

    personajes.forEach(personaje => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${personaje.imagen}" alt="${personaje.nombre}">
            <h2 class="card-title">${personaje.nombre}</h2>
        `;
        container.appendChild(card);

       card.querySelector('.card-title').addEventListener('click', () => {
    const descripcion = encodeURIComponent(personaje.descripcion);
    window.location.href = `detalle.html?nombre=${encodeURIComponent(personaje.nombre)}&descripcion=${descripcion}`;
});

    });
}

loadCharacters();

function filterCards() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const name = card.querySelector('.card-title').textContent.toLowerCase();
        if (name.includes(searchInput)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}



function openModal(nombre) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    modalTitle.textContent = nombre; 
    modal.style.display = "block";
}

document.getElementById('close').onclick = function() {
    document.getElementById('modal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
