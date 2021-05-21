import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  langs: lang[] = [
    {
      name: 'English',
      shortName: 'en',
    },
    {
      name: 'Français',
      shortName: 'fr',
    },
    {
      name: 'Nederlands',
      shortName: 'nl',
    },
  ];

  constructor(
    private router: Router,
    private translate: TranslateService,
    private localize: LocalizeRouterService
  ) {}

  ngOnInit(): void {}

  useLanguage(lang: string): void {
    this.localize.changeLanguage(lang);
    // this.translate.use(lang);
  }
}

export interface lang {
  name: string;
  shortName: string;
}
