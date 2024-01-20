import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValorviajePage } from './valorviaje.page';

describe('ValorviajePage', () => {
  let component: ValorviajePage;
  let fixture: ComponentFixture<ValorviajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ValorviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
