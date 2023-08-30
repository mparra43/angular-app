import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css'],
    standalone: true
})
export class DialogComponent {
  @Input() text: string = ''
}
