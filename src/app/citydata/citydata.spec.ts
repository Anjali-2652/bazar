import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Citydata } from './citydata';

describe('Citydata', () => {
  let component: Citydata;
  let fixture: ComponentFixture<Citydata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Citydata],
    }).compileComponents();

    fixture = TestBed.createComponent(Citydata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
