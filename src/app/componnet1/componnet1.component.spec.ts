import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componnet1Component } from './componnet1.component';

describe('Componnet1Component', () => {
  let component: Componnet1Component;
  let fixture: ComponentFixture<Componnet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componnet1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componnet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
