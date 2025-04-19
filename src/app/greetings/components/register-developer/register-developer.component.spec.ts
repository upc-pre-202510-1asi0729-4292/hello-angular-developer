import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeveloperComponent } from './register-developer.component';

describe('RegisterDeveloperComponent', () => {
  let component: RegisterDeveloperComponent;
  let fixture: ComponentFixture<RegisterDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterDeveloperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
