import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathereasyComponent } from './weathereasy.component';

describe('WeathereasyComponent', () => {
  let component: WeathereasyComponent;
  let fixture: ComponentFixture<WeathereasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeathereasyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeathereasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
