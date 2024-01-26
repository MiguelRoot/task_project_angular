import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  valueInput!: FormControl;

  constructor(private taksService: TaskService) {
    this.valueInput = new FormControl('');
  }

  addTask() {
    const value = this.valueInput.value;
    this.taksService.tasks.push(value);
    this.valueInput.setValue('');
    console.log(this.taksService.tasks);
  }
}
