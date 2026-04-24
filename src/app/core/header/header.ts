import { Component } from '@angular/core';
import { PERSONAL_DATA } from '../../data/personal.data';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {
  personal = PERSONAL_DATA;
}
