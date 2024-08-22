//obtengo las secciones para el listener
const mainseccion = document.getElementById("main_over");
const sec_seccion = document.getElementById("sec_over");
const sign_seccion = document.getElementById("sig_over");
//declaro variables para el bucle
let i = 1;
let sec = 6;
let sig = 11;
//funciones generadoras para personajes
//Generadora personajes principales
async function* renderMainCharacter() {
  while (i < 6) {
    const respuesta = await fetch(`https://swapi.dev/api/people/${i}`);
    const respuestaJson = await respuesta.json();
    const personaje = respuestaJson;

    yield personaje;
    i++;
  }
}
//generadora personajes secundarios
async function* renderSecCharacter() {
  while (sec < 11) {
    const respuesta = await fetch(`https://swapi.dev/api/people/${sec}`);
    const respuestaJson = await respuesta.json();
    const personaje = respuestaJson;

    yield personaje;
    sec++;
  }
}
//generadora personajes significativos
async function* renderSigCharacter() {
  while (sig < 16) {
    const respuesta = await fetch(`https://swapi.dev/api/people/${sig}`);
    const respuestaJson = await respuesta.json();
    const personaje = respuestaJson;

    yield personaje;
    sig++;
  }
}
//variables para realizar las peticiones
let request = renderMainCharacter();
let request2 = renderSecCharacter();
let request3 = renderSigCharacter();

//listener seccion principal y render personaje
mainseccion.addEventListener("mouseenter", async (e) => {
  let { value: personaje, done } = await request.next();
  if (!done) {
  const htmlArreglo = `
            <div class="col col-md-2 principal d-flex pt-2">
            <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="">
              <strong>${personaje.name}</strong>
              <p class="mb-0">Estatura: <span>${personaje.height}</span>  </p> <p">Peso: <span>${personaje.mass}</span></p>
            </div>
            </div>
        `;
  const principal = document.getElementById("principal");
  principal.innerHTML += htmlArreglo;
  }else{
    e.preventDefault()
  }
});
//listener seccion secundarios y render personaje
sec_seccion.addEventListener("mouseenter", async (e) => {
  let { value: personaje, done } = await request2.next();
  if (!done) {
  const htmlArreglo = `
            <div class="col col-md-2 secundario d-flex pt-2">
            <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>  
            <div class="">
              <strong>${personaje.name}</strong>
              <p class="mb-0">Estatura: <span>${personaje.height}</span></p>  <p>Peso: <span>${personaje.mass}</span></p>
            </div>
            </div>
`;
  const secundario = document.getElementById("secundarios");
  secundario.innerHTML += htmlArreglo;
  }else{
    e.preventDefault()
  }
});
//listener seccion significativos y render personaje
sign_seccion.addEventListener("mouseenter", async (e) => {
  let { value: personaje, done } = await request3.next();
  if (!done) {
  const htmlArreglo = `
            <div class="col col-md-2 significativos d-flex pt-2">
            <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="">  
              <strong>${personaje.name}</strong>
              <p class="mb-0">Estatura: <span>${personaje.height}</span> </p> <p>Peso: <span>${personaje.mass}</span></p>
            </div> 
            </div>    
        `;
  const significativo = document.getElementById("significativos");
  significativo.innerHTML += htmlArreglo;
  }else{
    e.preventDefault()
  }
}); 