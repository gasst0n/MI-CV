import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal-directive/reveal-directive';
import { Experience, EXPERIENCE_DATA } from '../../data/experience.data';
import { I18nService } from '../../services/i18n.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective, CommonModule],
  templateUrl: './experience.html',
})
export class ExperienceComponent {
  experiences: Experience[] = EXPERIENCE_DATA;

  constructor(
    public i18n: I18nService,
    public lang: LanguageService,
  ) {}
}
