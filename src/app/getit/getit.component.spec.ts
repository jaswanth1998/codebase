import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetitComponent } from './getit.component';

describe('GetitComponent', () => {
  let component: GetitComponent;
  let fixture: ComponentFixture<GetitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
