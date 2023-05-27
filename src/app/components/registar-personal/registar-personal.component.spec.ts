import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarPersonalComponent } from './registar-personal.component';

describe('RegistarPersonalComponent', () => {
  let component: RegistarPersonalComponent;
  let fixture: ComponentFixture<RegistarPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistarPersonalComponent]
    });
    fixture = TestBed.createComponent(RegistarPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
