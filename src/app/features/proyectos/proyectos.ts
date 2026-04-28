import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, PROJECTS_DATA } from '../../data/projects.data';
import { I18nService } from '../../services/i18n.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
})
export class Proyectos {
  projects: Project[] = PROJECTS_DATA;

  constructor(
    public i18n: I18nService,
    public lang: LanguageService,
  ) {}
}
``;
