import { Injectable } from '@angular/core';

export type Language = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly storageKey = 'lang';
  private currentLang: Language = 'es';

  constructor() {
    const storedLang = localStorage.getItem(this.storageKey) as Language;
    if (storedLang === 'en' || storedLang === 'es') {
      this.currentLang = storedLang;
    }
  }

  get current(): Language {
    return this.currentLang;
  }

  setLang(lang: Language): void {
    this.currentLang = lang;
    localStorage.setItem(this.storageKey, lang);
  }

  toggle(): void {
    const next = this.currentLang === 'es' ? 'en' : 'es';
    this.setLang(next);
  }
}
