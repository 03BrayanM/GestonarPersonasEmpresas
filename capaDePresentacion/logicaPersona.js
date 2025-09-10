const formPersona = document.getElementById("formPersona");
const personaSelect = document.getElementById("personaSelect");
const personaSelectA = document.getElementById("personaSelectAsociar");

formPersona.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;

  const persona = gestionarPersonas.registrarPersona(nombre, apellido);

  // Crear opción para personaSelect
  const option = document.createElement("option");
  option.value = persona.id;
  option.textContent = `${persona.nombre} ${persona.apellido}`;
  personaSelect.appendChild(option);

  // Crear opción para personaSelectAsociar
  const optionA = document.createElement("option");
  optionA.value = persona.id;
  optionA.textContent = `${persona.nombre} ${persona.apellido}`;
  personaSelectA.appendChild(optionA);

  formPersona.reset();
});