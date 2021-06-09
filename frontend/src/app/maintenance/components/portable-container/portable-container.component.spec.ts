import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortableContainerComponent } from './portable-container.component';

describe('PortableContainerComponent', () => {
  let component: PortableContainerComponent;
  let fixture: ComponentFixture<PortableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortableContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
