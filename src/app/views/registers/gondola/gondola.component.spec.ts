import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GondolaComponent } from './gondola.component';

describe('GondolaComponent', () => {
  let component: GondolaComponent;
  let fixture: ComponentFixture<GondolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GondolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GondolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
