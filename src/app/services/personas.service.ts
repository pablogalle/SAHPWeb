import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  personas: Persona[] = [
    new Persona(1, 'Juan Pérez', 100),
    new Persona(2, 'Ana Gómez', 150),
    // Agrega más personas si lo deseas
  ];

  constructor() { }

  obtenerPersonas() {
    return this.personas;
  }

  modificarPersona(id: number, nombre: string, puntos: number) {
    const persona = this.personas.find(p => p.id === id);
    if (persona) {
      persona.nombre = nombre;
      persona.puntos = puntos;
    }
  }

  agregarPersona(nombre: string, puntos: number) {
    // Suponiendo que id es autoincremental y basado en la longitud del array para simplificar
    const nuevoId = this.personas.length + 1;
    const nuevaPersona = new Persona(nuevoId, nombre, puntos);
    this.personas.push(nuevaPersona);
  }
}
