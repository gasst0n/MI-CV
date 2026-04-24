import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
})
export class FooterComponent implements OnInit {
  visits = 0;
  currentYear = new Date().getFullYear();

  async ngOnInit() {
    try {
      const response = await fetch('/api/visits');
      const data = await response.json();
      this.visits = data.visits;
    } catch (error) {
      console.error('Error loading visits counter');
    }
  }
}
