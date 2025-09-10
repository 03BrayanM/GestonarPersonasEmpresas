const formEmpresa = document.getElementById("formEmpresa");
const empresaSelect = document.getElementById("empresaSelect");

formEmpresa.addEventListener("submit", (e) => {
  e.preventDefault();
  const rit = document.getElementById("rit").value;
  const nombreEmpresa = document.getElementById("nombreEmpresa").value;
  const direccion = document.getElementById("direccion").value;

  try {
    const empresa = gestionarEmpresas.registrarEmpresa(rit, nombreEmpresa, direccion);

    // actualizar select
    const option = document.createElement("option");
    option.value = empresa.nit;
    option.textContent = empresa.nombre;
    empresaSelect.appendChild(option);

    formEmpresa.reset();
  } catch (error) {
    alert(error.message);
  }
});