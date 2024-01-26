import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
  valueInput!: FormControl;

  constructor(private taksService: TaskService) {
    this.valueInput = new FormControl('');
  }

  ngOnInit() { }

  addTask() {
    const value = this.valueInput.value;
    this.taksService.tasks.push(value);
    this.valueInput.setValue('');
    console.log(this.taksService.tasks);
  }


}
