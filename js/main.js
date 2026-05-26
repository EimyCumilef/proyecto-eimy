const imagenes = [
  { src: "img/foto1.jpg", alt: "Diseño dorado" },
  { src: "img/foto2.jpg", alt: "Patrón azul geométrico" },
  { src: "img/foto3.jpg", alt: "Líneas azules onduladas" }
];


const contenedorGaleria = document.querySelector("#contenedorGaleria");
const contenedorFavoritos = document.querySelector("#contenedorFavoritos");
const mensajeFavoritos = document.querySelector("#mensajeFavoritos");
const inputBusqueda = document.querySelector("#inputBusqueda");
const formularioContacto = document.querySelector("#formularioContacto");
const mensajeContacto = document.querySelector("#mensajeContacto");


function renderGaleria(lista) {
  contenedorGaleria.innerHTML = ""; // limpiar
  lista.forEach((img) => {
    const elementoImg = document.createElement("img");
    elementoImg.src = img.src;
    elementoImg.alt = img.alt;


    elementoImg.addEventListener("click", () => agregarFavorito(img));

    contenedorGaleria.appendChild(elementoImg);
  });
}


const agregarFavorito = (img) => {
  const favorito = document.createElement("img");
  favorito.src = img.src;
  favorito.alt = img.alt;
  contenedorFavoritos.appendChild(favorito);
  mensajeFavoritos.textContent = ""; 
};


inputBusqueda.addEventListener("input", () => {
  const texto = inputBusqueda.value.toLowerCase();
  const filtradas = imagenes.filter(img => img.alt.toLowerCase().includes(texto));
  renderGaleria(filtradas);
});


formularioContacto.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#inputNombre").value;
  const email = document.querySelector("#inputEmail").value;

  if (nombre && email) {
    mensajeContacto.textContent = `Gracias ${nombre}, pronto te contactaremos a ${email}.`;
    formularioContacto.reset();
  } else {
    mensajeContacto.textContent = "Por favor completa todos los campos.";
  }
});


renderGaleria(imagenes);
