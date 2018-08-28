import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopComponentComponent } from './shop-component.component';

describe('ShopComponentComponent', () => {
  let component: ShopComponentComponent;
  let fixture: ComponentFixture<ShopComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
