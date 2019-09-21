import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorconfigComponent } from './editorconfig.component';

describe('EditorconfigComponent', () => {
  let component: EditorconfigComponent;
  let fixture: ComponentFixture<EditorconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
