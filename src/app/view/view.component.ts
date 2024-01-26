import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent {
  pokemonData: any;
  constructor(private taksService: TaskService) {}

  get tasks() {
    return this.taksService.tasks;
  }
  async ngOnInit(): Promise<void> {
    try {
      // Obtén los datos del Pokemon directamente usando el servicio.
      this.pokemonData = await this.taksService.getPokemon();
    } catch (error) {
      console.error('Error al obtener datos de Pokémon:', error);
    }
  }
}
