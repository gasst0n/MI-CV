import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
})
export class FooterComponent implements OnInit {
  visits = 0;
  currentYear = new Date().getFullYear();

  constructor(
    public theme: ThemeService,
    public lang: LanguageService,
    public i18n: I18nService,
  ) {}

  async ngOnInit() {
    try {
      const response = await fetch('/api/visits');
      const data = await response.json();
      this.visits = data.visits;
    } catch (error) {
      console.error('Error loading visits counter');
    }
  }
}
