import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceStartComponent } from './maintenance-start.component';

describe('MaintenanceStartComponent', () => {
  let component: MaintenanceStartComponent;
  let fixture: ComponentFixture<MaintenanceStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
