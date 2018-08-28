import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneDirComponent } from './telephone-dir.component';

describe('TelephoneDirComponent', () => {
  let component: TelephoneDirComponent;
  let fixture: ComponentFixture<TelephoneDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephoneDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoneDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
