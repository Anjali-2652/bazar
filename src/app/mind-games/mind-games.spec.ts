import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindGames } from './mind-games';

describe('MindGames', () => {
  let component: MindGames;
  let fixture: ComponentFixture<MindGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindGames],
    }).compileComponents();

    fixture = TestBed.createComponent(MindGames);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
