import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortableInstrumentComponent } from './portable-instrument.component';

describe('PortableInstrumentComponent', () => {
  let component: PortableInstrumentComponent;
  let fixture: ComponentFixture<PortableInstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortableInstrumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortableInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
