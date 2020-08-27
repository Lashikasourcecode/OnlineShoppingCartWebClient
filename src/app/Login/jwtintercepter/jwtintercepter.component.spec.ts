import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JWTIntercepterComponent } from './jwtintercepter.component';

describe('JWTIntercepterComponent', () => {
  let component: JWTIntercepterComponent;
  let fixture: ComponentFixture<JWTIntercepterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JWTIntercepterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JWTIntercepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
