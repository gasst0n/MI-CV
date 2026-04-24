import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal-directive/reveal-directive';
import { Experience, EXPERIENCE_DATA } from '../../data/experience.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective, CommonModule],
  templateUrl: './experience.html',
})
export class ExperienceComponent {
  experiences: Experience[] = EXPERIENCE_DATA;
}
