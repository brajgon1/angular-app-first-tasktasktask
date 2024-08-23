import { Component, Input, Output, EventEmitter, output } from '@angular/core';

import { User } from './user.model';
// Type Aliases
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

// Interface
// interface User {
//   id: string;
//   name: string;
//   avatar: string;
// }
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input({ required: true }) user!: User; 
  @Output() select = new EventEmitter<string>();

  // output function --
  // select = output<string>();

  // COMMENTED CODE --- this is how you would use signal inputs - and then in the user,component.html you would invoke
  // avatar = input.required<string>()
  // name = input.required<string>()

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
