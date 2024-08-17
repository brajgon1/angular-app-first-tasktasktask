import { Component, computed, signal } from '@angular/core';

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
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  // signals usage below
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // how to dynamically import the photos without signals
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }
  
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}
