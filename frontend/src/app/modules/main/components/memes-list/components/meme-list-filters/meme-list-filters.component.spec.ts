import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeListFiltersComponent } from './meme-list-filters.component';

describe('MemeListFiltersComponent', () => {
  let component: MemeListFiltersComponent;
  let fixture: ComponentFixture<MemeListFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeListFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
