import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
 // Asegúrate de que la ruta sea correcta

declare var $: any; // Declara $ para usar jQuery (Bootstrap depende de jQuery para los modales)

@Component({
  selector: 'app-editar-persona-modal',
  templateUrl: './editar-persona-modal.component.html',
  styleUrls: ['./editar-persona-modal.component.scss']
})
export class EditarPersonaModalComponent {
  @Input() personaEditando: Persona = new Persona(0, "", 0);
  @Output() cambiosGuardados = new EventEmitter<Persona>();

  constructor() { }

  abrirModal() {
    $('#editarPersonaModal').modal('show');
  }

  guardarCambios() {
    this.cambiosGuardados.emit(this.personaEditando);
    $('#editarPersonaModal').modal('hide');
  }
}

