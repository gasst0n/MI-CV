import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
})
export class FooterComponent implements OnInit {
  visits = 0;
  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    const storedVisits = localStorage.getItem('portfolio_visits');

    this.visits = storedVisits ? Number(storedVisits) + 1 : 1;

    localStorage.setItem('portfolio_visits', this.visits.toString());
  }
}
