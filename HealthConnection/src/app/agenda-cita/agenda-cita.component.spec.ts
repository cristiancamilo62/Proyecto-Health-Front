import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCitaComponent } from './agenda-cita.component';

describe('AgendaCitaComponent', () => {
  let component: AgendaCitaComponent;
  let fixture: ComponentFixture<AgendaCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaCitaComponent]
    });
    fixture = TestBed.createComponent(AgendaCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
