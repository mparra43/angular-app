import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilmModel } from '@core/models/Films.model';

@Component({
  selector: 'app-list-body',
  templateUrl: './list-body.component.html',
  styleUrls: ['./list-body.component.css']
})
export class ListBodyComponent {
  @Input() films: FilmModel[] = []
  @Output() callbackShow: EventEmitter<any> = new EventEmitter()
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }
  constructor() { }

  ngOnInit(): void {

  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
  openNoteForm(id:number): void{
    this.callbackShow.emit(id);
  }
  
}
