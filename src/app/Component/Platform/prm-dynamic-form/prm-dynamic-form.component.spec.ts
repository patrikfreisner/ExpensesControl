import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmDynamicFormComponent } from './prm-dynamic-form.component';

describe('PrmDynamicFormComponent', () => {
  let component: PrmDynamicFormComponent;
  let fixture: ComponentFixture<PrmDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrmDynamicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrmDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
