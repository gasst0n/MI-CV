import { Component } from '@angular/core';
import { PERSONAL_DATA } from '../../data/personal.data';
import { LanguageService } from '../../services/language.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
})
export class Header {
  personal = PERSONAL_DATA;

  constructor(
    public lang: LanguageService,
    public i18n: I18nService,
  ) {}
}
