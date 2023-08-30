import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-note-form',
    templateUrl: './note-form.component.html',
    styleUrls: ['./note-form.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule]
})
export class NoteFormComponent {
  @Output() callbackData: EventEmitter<any> = new EventEmitter()
  comment: string = '';
  
  submitForm(): void{
      this.callbackData.emit(this.comment)
  }
}
