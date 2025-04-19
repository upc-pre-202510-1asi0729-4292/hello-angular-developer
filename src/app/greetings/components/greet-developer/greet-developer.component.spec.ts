import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetDeveloperComponent } from './greet-developer.component';

describe('GreetDeveloperComponent', () => {
  let component: GreetDeveloperComponent;
  let fixture: ComponentFixture<GreetDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetDeveloperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
