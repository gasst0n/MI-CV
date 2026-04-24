import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevealDirective } from './reveal-directive';

describe('RevealDirective', () => {
  let component: RevealDirective;
  let fixture: ComponentFixture<RevealDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevealDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(RevealDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
