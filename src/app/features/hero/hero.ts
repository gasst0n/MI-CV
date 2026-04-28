import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_DATA } from '../../data/personal.data';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { I18nService } from '../../services/i18n.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  animations: [
    trigger('langTransition', [
      transition(':increment, :decrement', [
        style({
          opacity: 0,
          transform: 'translateY(6px)',
        }),
        animate(
          '280ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({
            opacity: 1,
            transform: 'translateY(0)',
          }),
        ),
      ]),
    ]),
  ],
})
export class Hero {
  personal = PERSONAL_DATA;

  /** índice solo para disparar la animación */
  langIndex = 0;

  constructor(
    public theme: ThemeService,
    public lang: LanguageService,
    public i18n: I18nService,
  ) {}

  ngDoCheck() {
    this.langIndex = this.lang.current === 'en' ? 1 : 0;
  }
}
