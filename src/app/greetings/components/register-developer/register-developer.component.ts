import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

/**
 * Component for registering a developer.
 * It contains a form with first name and last name fields.
 * It emits an event when the form is submitted with valid data.
 * It also emits an event when the "Later" button is clicked.
 * @author Open Source Application Development Team
 * @public
 */
@Component({
  selector: 'app-register-developer',
  imports: [ReactiveFormsModule],
  templateUrl: './register-developer.component.html',
  styleUrl: './register-developer.component.css'
})
export class RegisterDeveloperComponent {
  /**
   * Form group for the developer registration form.
   * It contains two form controls: firstName and lastName.
   * Both controls are required and must have a minimum length of 2 characters.
   * @public
   */
  public developerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });
  /**
   * Event emitter for the developerRegistered event.
   * It emits an object containing the first name and last name of the developer.
   * @public
   */
  @Output() public developerRegistered =
    new EventEmitter<{firstName: string, lastName: string}>();
  /**
   * Event emitter for the later event.
   * It emits when the "Later" button is clicked.
   * @public
   */
  @Output() public later = new EventEmitter<void>();

  /**
   * Method to handle the form submission.
   * It checks if the form is valid and emits the developerRegistered event with the form values.
   * @public
   */
  public onRegister(): void {
    if(this.developerForm.valid) {
      const firstName = this.developerForm.value.firstName ?? '';
      const lastName = this.developerForm.value.lastName ?? '';
      this.developerRegistered.emit({firstName, lastName});
      this.developerForm.reset();
    }
  }
  /**
   * Method to handle the "Later" button click.
   * It resets the form and emits the later event.
   * @public
   */
  public onLater(): void {
    this.developerForm.reset();
    this.later.emit();
  }

  /**
   * Method to handle the "Clear" button click.
   * It resets the form.
   * @public
   */
  public onClear(): void {
    this.developerForm.reset();
  }
}
