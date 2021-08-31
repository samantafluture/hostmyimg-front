import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseInputComponent } from './browse-input.component';

describe('BrowseInputComponent', () => {
  let component: BrowseInputComponent;
  let fixture: ComponentFixture<BrowseInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
