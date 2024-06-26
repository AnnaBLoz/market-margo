import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditGondolaComponent } from './modal-edit-gondola.component';

describe('ModalEditGondolaComponent', () => {
  let component: ModalEditGondolaComponent;
  let fixture: ComponentFixture<ModalEditGondolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditGondolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEditGondolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
