import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componnet2Component } from './componnet2.component';

describe('Componnet2Component', () => {
  let component: Componnet2Component;
  let fixture: ComponentFixture<Componnet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componnet2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componnet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
