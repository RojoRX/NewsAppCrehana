import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintitleComponent } from './maintitle.component';

describe('MaintitleComponent', () => {
  let component: MaintitleComponent;
  let fixture: ComponentFixture<MaintitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
