import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyInformationComponent } from './monthly-information.component';

describe('MonthlyInformationComponent', () => {
  let component: MonthlyInformationComponent;
  let fixture: ComponentFixture<MonthlyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
