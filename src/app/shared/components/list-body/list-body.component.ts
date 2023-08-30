import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilmModel } from '@core/models/Films.model';
import { OrderListPipe } from '../../pipe/order-list.pipe';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-list-body',
    templateUrl: './list-body.component.html',
    styleUrls: ['./list-body.component.css'],
    standalone: true,
    imports: [NgFor, NgTemplateOutlet, ImgBrokenDirective, OrderListPipe]
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
