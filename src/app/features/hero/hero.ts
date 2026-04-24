import { Component } from '@angular/core';
import { PERSONAL_DATA } from '../../data/personal.data';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {
  personal = PERSONAL_DATA;
}
