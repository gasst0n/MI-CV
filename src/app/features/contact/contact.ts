import { Component } from '@angular/core';
import { CONTACT_DATA } from '../../data/contact.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
})
export class Contact {
  contact = CONTACT_DATA;
}
