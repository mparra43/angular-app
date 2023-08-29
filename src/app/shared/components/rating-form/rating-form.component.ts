import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']
})
export class RatingFormComponent {
  @Output() callbackData: EventEmitter<any> = new EventEmitter()
  comment: string = '';
  selectedRating: number = 0;

  setSelectedRating(rating: number): void {
    this.selectedRating = rating;
  }

  submitForm(): void {
    if (this.selectedRating !== null) {
      this.callbackData.emit({ rating: this.selectedRating, comment: this.comment })
    } else {
      console.log('Por favor, selecciona una calificación.');
    }
  }
}
