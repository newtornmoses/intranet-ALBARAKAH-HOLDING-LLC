import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetHomeComponent } from './intranet-home.component';

describe('IntranetHomeComponent', () => {
  let component: IntranetHomeComponent;
  let fixture: ComponentFixture<IntranetHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntranetHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
