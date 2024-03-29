import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorComponent } from './jugador.component';

describe('JugadorComponent', () => {
  let component: JugadorComponent;
  let fixture: ComponentFixture<JugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
