import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import { ES } from './language/i18n/es';
import { EN } from './language/i18n/en';

@Injectable({ providedIn: 'root' })
export class I18nService {
  constructor(private lang: LanguageService) {}

  t(key: keyof typeof ES): string {
    const dict = this.lang.current === 'es' ? ES : EN;
    return dict[key] ?? key;
  }
}
