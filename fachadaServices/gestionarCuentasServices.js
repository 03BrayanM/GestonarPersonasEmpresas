class GestionarCuentas {
  constructor(repo, gestionarPersonas) {
    this.repo = repo;
    this.gestionarPersonas = gestionarPersonas;
  }

  registrarCuenta(numeroCuenta, saldo, tipo, personaId) {
    const persona = this.gestionarPersonas.buscarPersona(personaId);
    if (!persona) {
      throw new Error("Persona no encontrada");
    }
    const cuenta = new Cuenta(numeroCuenta, saldo, tipo, persona);
    this.repo.agregar(cuenta);
    return cuenta;
  }

  listarCuentas() {
    return this.repo.obtenerTodas();
  }
}

const gestionarCuentas = new GestionarCuentas(cuentaRepo, gestionarPersonas);



