class GestionarEmpresas {
  constructor(repo) {
    this.repo = repo;
  }

  registrarEmpresa(rit, nombre, direccion) {
    if (!rit || !nombre || !direccion) {
      throw new Error("Todos los campos de la empresa son obligatorios");
    }    
    const empresa = new Empresa(rit, nombre, direccion);
    this.repo.agregar(empresa);
    return empresa;
  }

  listarEmpresas() {
    return this.repo.obtenerTodas();
  }

  buscarEmpresa(id) {    
    return this.repo.buscarPorId(id);
  }
}

const gestionarEmpresas = new GestionarEmpresas(empresaRepo);
