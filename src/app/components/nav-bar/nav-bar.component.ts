import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  previousElement: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    let url = '/index';
    this.htmlElemSelector(url);
    this.previousElement.classList.add('active');
  }

  selectLink(origin: string): void {
    this.previousElement.classList.remove('active');

    this.htmlElemSelector(origin);

    this.previousElement.classList.add('active');
  }

  htmlElemSelector(origin: string): void {
    switch (origin) {
      case '/index':
        this.previousElement = document.getElementById(
          'home-link'
        ) as HTMLLinkElement;
        break;

      case '/cats':
        this.previousElement = document.getElementById(
          'cats-link'
        ) as HTMLLinkElement;
        break;

      case '/users':
        this.previousElement = document.getElementById(
          'users-link'
        ) as HTMLLinkElement;
        break;

      case '':
        this.previousElement = document.getElementById(
          'home-link'
        ) as HTMLLinkElement;
        break;
    }
  }
}
