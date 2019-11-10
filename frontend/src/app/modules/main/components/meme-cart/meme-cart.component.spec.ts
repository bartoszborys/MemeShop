import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeCartComponent } from './meme-cart.component';

describe('MemeCartComponent', () => {
  let component: MemeCartComponent;
  let fixture: ComponentFixture<MemeCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
