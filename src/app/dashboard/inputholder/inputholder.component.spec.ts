import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputholderComponent } from './inputholder.component';

describe('InputholderComponent', () => {
  let component: InputholderComponent;
  let fixture: ComponentFixture<InputholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
