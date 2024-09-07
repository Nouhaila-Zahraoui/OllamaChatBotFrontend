import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchatComponent } from './catchat.component';

describe('CatchatComponent', () => {
  let component: CatchatComponent;
  let fixture: ComponentFixture<CatchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
