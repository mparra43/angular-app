import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgClass } from '@angular/common';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css'],
    standalone: true,
    imports: [NgFor, RouterLink, NgClass]
})
export class SideBarComponent implements OnInit {
  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'films']
      },
      {
        name: 'Favoritos',
        icon: 'uil uil-heart',
        router: ['/', 'favorites'],
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Peliculas ',
        icon: 'uil-plus-square'
      },
      {
        name: 'Series',
        icon: 'uil-heart-medical'
      }
    ]

    

  }

  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })
    console.log($event)
  }
}
