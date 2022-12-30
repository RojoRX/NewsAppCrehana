import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootitleComponent } from './footitle.component';

describe('FootitleComponent', () => {
  let component: FootitleComponent;
  let fixture: ComponentFixture<FootitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
