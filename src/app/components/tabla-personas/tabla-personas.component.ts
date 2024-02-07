import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonasService } from 'src/app/services/personas.service';
import { EditarPersonaModalComponent } from '../editar-persona-modal/editar-persona-modal.component';

@Component({
  selector: 'app-tabla-personas',
  templateUrl: './tabla-personas.component.html',
  styleUrls: ['./tabla-personas.component.scss'],
})
export class TablaPersonasComponent implements OnInit {
  personas: Persona[] = [];

  nombreBusqueda: string = '';
  nuevoNombre: string = '';
  nuevosPuntos: number = 0;

  personaSeleccionada: Persona = new Persona(0, '', 0);

  
  constructor(
    private personasService: PersonasService,
    private editarPersonaModalComponent: EditarPersonaModalComponent
  ) {}

  ngOnInit(): void {
    this.personas = this.personasService.obtenerPersonas();
  }

  modificarPersona(id: number, nombre: string, puntos: number) {
    this.personasService.modificarPersona(id, nombre, puntos);
  }

  agregarPersona(nombre: string, puntos: number) {
    this.personasService.agregarPersona(nombre, puntos);
    this.personas = this.personasService.obtenerPersonas(); // Actualiza la lista
  }

  get personasFiltradas() {
    if (!this.nombreBusqueda) {
      return this.personas;
    }

    const busqueda = this.nombreBusqueda.toLowerCase();
    return this.personas.filter(
      (persona) =>
        persona.nombre.toLowerCase().includes(busqueda) ||
        persona.id.toString().includes(busqueda)
    );
  }

  editarPersona(id: number) {
    this.personaSeleccionada = this.personas.find((p) => p.id === id)!;
    this.editarPersonaModalComponent.abrirModal(); // Asegúrate de tener una referencia a tu componente modal
  }

  actualizarPersona(personaActualizada: Persona) {
    // Lógica para actualizar la persona en tu lista y posiblemente en el backend
  }

  incrementarPuntos(id: number) {
    const persona = this.personas.find((p) => p.id === id);
    if (persona) {
      persona.puntos++;
      // Actualiza la persona en el backend o servicio aquí si es necesario
    }
  }

  decrementarPuntos(id: number) {
    const persona = this.personas.find((p) => p.id === id);
    if (persona) {
      persona.puntos--;
      // Actualiza la persona en el backend o servicio aquí si es necesario
    }
  }
}
