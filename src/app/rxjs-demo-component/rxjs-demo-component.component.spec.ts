import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDemoComponentComponent } from './rxjs-demo-component.component';

describe('RxjsDemoComponentComponent', () => {
  let component: RxjsDemoComponentComponent;
  let fixture: ComponentFixture<RxjsDemoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxjsDemoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjsDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
