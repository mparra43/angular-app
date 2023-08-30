import { Component, Input } from '@angular/core';
import { CardMovieComponent } from '../card-movie/card-movie.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-section-generic',
    templateUrl: './section-generic.component.html',
    styleUrls: ['./section-generic.component.css'],
    standalone: true,
    imports: [NgClass, NgFor, CardMovieComponent]
})

export class SectionGenericComponent {
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() data: Array<any> = []

  constructor() {}

  ngOnInit(): void {}
}
