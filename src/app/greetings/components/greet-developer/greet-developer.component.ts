import {Component, Input} from '@angular/core';
import {Developer} from '../../model/developer.entity';

@Component({
  selector: 'app-greet-developer',
  imports: [],
  templateUrl: './greet-developer.component.html',
  styleUrl: './greet-developer.component.css'
})
export class GreetDeveloperComponent {
  @Input() public firstName: string = '';
  @Input() public lastName: string = '';
  public get fullName(): string {
    if(!this.firstName && !this.lastName) {
      return 'Anonymous Developer';
    }
    let developer = new Developer(this.firstName, this.lastName);
    return developer.fullName;
  }

  public get isRegistered(): boolean {
    return !!(this.firstName && this.lastName);
  }
}
