  class GestionarPersonas {
    constructor(repo) {
      this.repo = repo;
    }

    registrarPersona(nombre, apellido) {
      const id = this.repo.siguienteId();
      const persona = new Persona(id, nombre, apellido);
      this.repo.agregar(persona);
      return persona;
    }

    listarPersonas() {
      return this.repo.obtenerTodas();
    }

    buscarPersona(id) {
      return this.repo.buscarPorId(id);
    }
     personaAgregarEmpresa(personaId, empresa) {    
    const persona = this.repo.buscarPorId(personaId);
    if (!persona) {
      throw new Error("Persona no encontrada.");
    }

    if (persona.empresa && persona.empresa.nit !== empresa.nit) {
      throw new Error("La persona ya está asociada a otra empresa.");
    }

    persona.empresa = empresa; // asignamos la empresa
    return persona; // devolvemos la persona actualizada
  }
  }

  const gestionarPersonas = new GestionarPersonas(personaRepo);