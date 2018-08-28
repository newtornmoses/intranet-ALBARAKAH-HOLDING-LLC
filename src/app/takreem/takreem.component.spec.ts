import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakreemComponent } from './takreem.component';

describe('TakreemComponent', () => {
  let component: TakreemComponent;
  let fixture: ComponentFixture<TakreemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakreemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakreemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
