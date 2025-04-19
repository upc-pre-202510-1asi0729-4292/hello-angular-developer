/**
 * Developer entity
 * This class represents a developer with a first name and last name.
 * @author Open Source Application Development Team
 * @public
 */
export class Developer {
  /** @private The first name of the developer */
  private _firstName: string;
  /** @private The last name of the developer */
  private _lastName: string;

  /**
   * Constructor to initialize the developer's first name and last name.
   * @param firstName {string} The first name of the developer
   * @param lastName {string} The last name of the developer
   */
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  /**
   * Gets the full name of the developer.
   * @returns {string} The full name of the developer
   */
  public get fullName(): string { return `${this._firstName} ${this._lastName}`.trim(); }
}
