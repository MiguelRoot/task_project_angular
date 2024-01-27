import { Component, OnInit, NgModule} from '@angular/core';
import { FormControl, NgModel, ReactiveFormsModule} from '@angular/forms';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports:[ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})

export class InputComponent implements OnInit {
  valueInput!: FormControl;
  pok:any;

  constructor(private taksService: TaskService) {
    this.valueInput = new FormControl('');
  }

  async ngOnInit(): Promise<void> {
    this.pok = await this.taksService.getPokemon();
   }

  addTask() {
    const value = this.valueInput.value;
    this.taksService.tasks.push(value);
    this.valueInput.setValue('');
    console.log(this.taksService.tasks);
  }


}
