const formCuenta = document.getElementById("formCuenta");
const tablaCuentas = document.getElementById("tablaCuentas");

formCuenta.addEventListener("submit", (e) => {
  e.preventDefault();
  const numeroCuenta = document.getElementById("numeroCuenta").value;
  const saldo = parseFloat(document.getElementById("saldo").value);
  const tipo = document.getElementById("tipo").value;
  const personaId = parseInt(personaSelect.value);
  console.log({ numeroCuenta, saldo, tipo, personaId });
  try {
    const cuenta = gestionarCuentas.registrarCuenta(numeroCuenta, saldo, tipo, personaId);
 
    // mostrar en tabla
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${cuenta.numeroCuenta}</td>
      <td>${cuenta.saldo}</td>
      <td>${cuenta.tipo}</td>
      <td>${cuenta.persona.nombre} ${cuenta.persona.apellido}</td>
      <td>${cuenta.empresa ? cuenta.empresa.nombre : 'Sin empresa'}</td>
    `;
    tablaCuentas.appendChild(fila);

    formCuenta.reset();
  } catch (error) {
    alert(error.message);
  }
});
