import { Component } from '@angular/core';
import { EDUCATION_DATA, Education } from '../../data/education.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
})
export class EducationComponent {
  education: Education[] = EDUCATION_DATA;
}
