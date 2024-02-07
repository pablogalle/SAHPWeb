import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPersonaModalComponent } from './editar-persona-modal.component';

describe('EditarPersonaModalComponent', () => {
  let component: EditarPersonaModalComponent;
  let fixture: ComponentFixture<EditarPersonaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPersonaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPersonaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
