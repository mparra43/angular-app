import { Component, Input } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';

@Component({
    selector: 'app-list-header',
    templateUrl: './list-header.component.html',
    styleUrls: ['./list-header.component.css'],
    standalone: true,
    imports: [NgIf, NgClass]
})
export class ListHeaderComponent {
  @Input() title: string = ''
  @Input() subTitle: string = ''
  @Input() count: string = ''
  @Input() icon: string = ''
  @Input() img: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
