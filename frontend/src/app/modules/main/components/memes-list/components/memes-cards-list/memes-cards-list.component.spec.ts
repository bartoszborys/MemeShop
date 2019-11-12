import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemesCardsListComponent } from './memes-cards-list.component';

describe('MemesCardsListComponent', () => {
  let component: MemesCardsListComponent;
  let fixture: ComponentFixture<MemesCardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemesCardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemesCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
