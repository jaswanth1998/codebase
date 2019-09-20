import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulardialogueComponent } from './angulardialogue.component';

describe('AngulardialogueComponent', () => {
  let component: AngulardialogueComponent;
  let fixture: ComponentFixture<AngulardialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngulardialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulardialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
