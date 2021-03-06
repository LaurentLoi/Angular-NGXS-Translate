import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(environment.defaultLang);
  }

  title = 'Demo-store-translate';
}
