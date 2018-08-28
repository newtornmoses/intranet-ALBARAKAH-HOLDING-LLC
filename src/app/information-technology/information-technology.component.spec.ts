import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationTechnologyComponent } from './information-technology.component';

describe('InformationTechnologyComponent', () => {
  let component: InformationTechnologyComponent;
  let fixture: ComponentFixture<InformationTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
