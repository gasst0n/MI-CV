import { Component } from '@angular/core';
import { Project, PROJECTS_DATA } from '../../data/projects.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
})
export class Proyectos {
  projects: Project[] = PROJECTS_DATA;
}
