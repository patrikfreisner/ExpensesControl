import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualInformationComponent } from './annual-information.component';

describe('AnnualInformationComponent', () => {
  let component: AnnualInformationComponent;
  let fixture: ComponentFixture<AnnualInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
