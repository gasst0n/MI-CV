import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EDUCATION_DATA, Education } from '../../data/education.data';
import { I18nService } from '../../services/i18n.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
})
export class EducationComponent {
  education: Education[] = EDUCATION_DATA;

  constructor(
    public i18n: I18nService,
    public lang: LanguageService,
  ) {}
}
