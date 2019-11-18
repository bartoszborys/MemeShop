import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestMemesComponent } from './latest-memes.component';

describe('LatestMemesComponent', () => {
  let component: LatestMemesComponent;
  let fixture: ComponentFixture<LatestMemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestMemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestMemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
