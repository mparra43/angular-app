import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.css']
})
export class ListHeaderComponent {
  @Input() title: string = ''
  @Input() subTitle: string = ''
  @Input() count: string = ''
  @Input() icon: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
