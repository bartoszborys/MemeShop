import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeCartRowCountComponent } from './meme-cart-row-count.component';

describe('MemeCartRowCountComponent', () => {
  let component: MemeCartRowCountComponent;
  let fixture: ComponentFixture<MemeCartRowCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeCartRowCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeCartRowCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
