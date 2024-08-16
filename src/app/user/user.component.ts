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
  selectedUser = DUMMY_USERS[randomIndex];
  // the above -- now all properties this is available in the user component
}
