import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExperienceComponent } from './features/experience/experience';
import { Hero } from './features/hero/hero';
import { Header } from './core/header/header';
import { ScrollProgressComponent } from './core/scroll-progress/scroll-progress';
import { SecondaryHeaderComponent } from './core/secondary-header/secondary-header';
import { Proyectos } from './features/proyectos/proyectos';
import { EducationComponent } from './features/education/education';
import { Contact } from './features/contact/contact';
import { SkillsComponent } from './features/skills/skills';
import { FooterComponent } from './core/footer/footer';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    ExperienceComponent,
    Hero,
    Header,
    ScrollProgressComponent,
    SecondaryHeaderComponent,
    Proyectos,
    EducationComponent,
    Contact,
    SkillsComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private theme: ThemeService) {
    this.theme.initTheme();
  }
  protected readonly title = signal('cv-portfolio');
}
