const btnAsociar = document.getElementById("formAsociarPersonaEmpresa");
const empresaS = document.getElementById("empresaSelect");
const personaS = document.getElementById("personaSelectAsociar");
const tableCuentas = document.getElementById("tablaCuentas");

btnAsociar.addEventListener("submit", (e) => {
  e.preventDefault();

  const empresaId = empresaS.value;
  const personaId = personaS.value;
  try {
    let empresa = gestionarEmpresas.buscarEmpresa(empresaId);
    let persona = gestionarPersonas.buscarPersona(personaId);
    if (!empresa || !persona) {
      throw new Error("Empresa o persona no encontrada.");
    }
    if (persona.empresa && persona.empresa.nit === empresa.nit) {
      throw new Error("La persona ya está asociada a esta empresa.");
    }
    persona = gestionarPersonas.personaAgregarEmpresa(persona.id, empresa);

    actualizarTablaCuentas();

    alert("Asociación realizada con éxito.");
  } catch (error) {
    alert(error.message);
  }
});

function actualizarTablaCuentas() {
  const tbody = document.getElementById("tablaCuentas"); // Asegúrate de apuntar al tbody
  const cuentas = gestionarCuentas.listarCuentas();
  console.log("Cuentas disponibles para actualizar tabla:", cuentas); // Depuración

  // Limpiar todas las filas del tbody
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  // Verificar que cuentas sea un array válido
  if (cuentas && Array.isArray(cuentas)) {
    cuentas.forEach(cuenta => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${cuenta.numeroCuenta || 'N/A'}</td>
        <td>${cuenta.saldo !== undefined ? cuenta.saldo : '0'}</td>
        <td>${cuenta.tipo || 'N/A'}</td>
        <td>${cuenta.persona ? cuenta.persona.nombre + ' ' + (cuenta.persona.apellido || '') : 'N/A'}</td>
        <td>${cuenta.persona && cuenta.persona.empresa ? cuenta.persona.empresa.nombre : 'Sin empresa'}</td>
      `;
      tbody.appendChild(fila);
    });
  } else {
    console.warn("Cuentas no es un array o está undefined:", cuentas);
  }

  // Llamar a la actualización de estadísticas después de actualizar la tabla
  actualizarEstadisticas();
}

// Nueva función para calcular y mostrar estadísticas
function actualizarEstadisticas() {
  const cuentas = gestionarCuentas.listarCuentas();
  console.log("Cuentas para estadísticas:", cuentas); // Depuración

  let cantidadCuentas = 0;
  let cantidadAhorros = 0;
  let cantidadCorriente = 0;
  let totalValor = 0;
  let totalAhorros = 0;
  let totalCorriente = 0;

  if (cuentas && Array.isArray(cuentas)) {
    cantidadCuentas = cuentas.length;

    cuentas.forEach(cuenta => {
      const saldo = cuenta.saldo || 0; // Usar 0 si saldo es undefined
      totalValor += saldo;

      if (cuenta.tipo === "Ahorros") {
        cantidadAhorros++;
        totalAhorros += saldo;
      } else if (cuenta.tipo === "Corriente") {
        cantidadCorriente++;
        totalCorriente += saldo;
      }
    });
  }

  // Actualizar los elementos en la interfaz
  document.getElementById("cantidadCuentas").textContent = cantidadCuentas;
  document.getElementById("cantidadAhorros").textContent = cantidadAhorros;
  document.getElementById("cantidadCorriente").textContent = cantidadCorriente;
  document.getElementById("totalValor").textContent = totalValor.toFixed(2); // Formato con 2 decimales
  document.getElementById("totalAhorros").textContent = totalAhorros.toFixed(2);
  document.getElementById("totalCorriente").textContent = totalCorriente.toFixed(2);
}