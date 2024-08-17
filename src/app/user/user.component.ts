import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

// Below - how to pull a random user from the dummy users list
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // the below -- now all properties this is available in the user component
  selectedUser = DUMMY_USERS[randomIndex];
  
  // outputting dynamically the photos to the user.component.html file
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
  
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
