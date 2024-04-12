import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraFormsComponent } from './pra-forms.component';

describe('PraFormsComponent', () => {
  let component: PraFormsComponent;
  let fixture: ComponentFixture<PraFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PraFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PraFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
