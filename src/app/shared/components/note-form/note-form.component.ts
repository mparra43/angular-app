import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent {
  @Output() callbackData: EventEmitter<any> = new EventEmitter()
  comment: string = '';
  
  submitForm(): void{
      this.callbackData.emit(this.comment)
  }
}
