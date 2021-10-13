import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmDynamicInputComponent } from './prm-dynamic-input.component';

describe('PrmDynamicInputComponent', () => {
  let component: PrmDynamicInputComponent;
  let fixture: ComponentFixture<PrmDynamicInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrmDynamicInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrmDynamicInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
