import { Component } from '@angular/core';
import { CONTACT_DATA } from '../../data/contact.data';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
})
export class Contact {
  contact = CONTACT_DATA;

  constructor(
    public theme: ThemeService,
    public lang: LanguageService,
    public i18n: I18nService,
  ) {}
}
