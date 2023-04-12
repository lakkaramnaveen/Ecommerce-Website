import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcHeaderComponent } from './ec-header.component';

describe('EcHeaderComponent', () => {
  let component: EcHeaderComponent;
  let fixture: ComponentFixture<EcHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
