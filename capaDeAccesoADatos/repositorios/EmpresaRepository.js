class EmpresaRepository {
  constructor() {
    this.empresas = [];
  }

  agregar(empresa) {
    this.empresas.push(empresa);
  }
 buscarPorId(id) {  
    return this.empresas.find(e => e.nit == id);
  }
  obtenerTodas() {
    return this.empresas;
  }
  
}

const empresaRepo = new EmpresaRepository();