import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillGroup, SKILLS_DATA } from '../../data/skills.data';
import { I18nService } from '../../services/i18n.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
})
export class SkillsComponent {
  skills: SkillGroup[] = SKILLS_DATA;

  constructor(
    public i18n: I18nService,
    public lang: LanguageService,
  ) {}
}
