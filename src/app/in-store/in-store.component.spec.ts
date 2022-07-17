import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InStoreComponent } from './in-store.component';

describe('InStoreComponent', () => {
  let component: InStoreComponent;
  let fixture: ComponentFixture<InStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
