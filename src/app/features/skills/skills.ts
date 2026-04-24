import { Component } from '@angular/core';
import { SkillGroup, SKILLS_DATA } from '../../data/skills.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
})
export class SkillsComponent {
  skills: SkillGroup[] = SKILLS_DATA;
}
