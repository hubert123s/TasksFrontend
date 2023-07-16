import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateListComponentComponent } from './rate-list-component.component';

describe('RateListComponentComponent', () => {
  let component: RateListComponentComponent;
  let fixture: ComponentFixture<RateListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
