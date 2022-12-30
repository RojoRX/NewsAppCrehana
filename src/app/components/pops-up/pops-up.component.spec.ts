import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopsUpComponent } from './pops-up.component';

describe('PopsUpComponent', () => {
  let component: PopsUpComponent;
  let fixture: ComponentFixture<PopsUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopsUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopsUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
