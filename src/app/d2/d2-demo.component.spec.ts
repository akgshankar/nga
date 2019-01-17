import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D2DemoComponent } from './d2-demo.component';

describe('D2DemoComponent', () => {
  let component: D2DemoComponent;
  let fixture: ComponentFixture<D2DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D2DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
