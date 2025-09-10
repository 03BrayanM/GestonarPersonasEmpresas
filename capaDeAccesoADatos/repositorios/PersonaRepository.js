class PersonaRepository {
  constructor() {
    this.personas = [];
  }

  agregar(persona) {
    this.personas.push(persona);
  }

  obtenerTodas() {
    return this.personas;
  }

  buscarPorId(ide) {
    return this.personas.find(p => p.id == ide);
  }

  siguienteId() {
    return this.personas.length + 1;
  }
}
const personaRepo = new PersonaRepository()