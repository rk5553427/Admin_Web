import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDriverComponent } from './bus-driver.component';

describe('BusDriverComponent', () => {
  let component: BusDriverComponent;
  let fixture: ComponentFixture<BusDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusDriverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
