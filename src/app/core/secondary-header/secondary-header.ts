import { Component, HostListener } from '@angular/core';
import { PERSONAL_DATA } from '../../data/personal.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secondary-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondary-header.html',
})
export class SecondaryHeaderComponent {
  personal = PERSONAL_DATA;
  visible = true;

  @HostListener('window:scroll')
  onScroll() {
    this.visible = window.scrollY < 80;
  }
}
