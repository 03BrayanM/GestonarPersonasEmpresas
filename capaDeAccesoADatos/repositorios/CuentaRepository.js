class CuentaRepository {
  constructor() {
    this.cuentas = [];
  }

  agregar(cuenta) {
    this.cuentas.push(cuenta);
  }

  obtenerTodas() {
    return this.cuentas;
  }
}

const cuentaRepo = new CuentaRepository();