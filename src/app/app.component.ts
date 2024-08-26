import { Component } from '@angular/core';
// import { NgFor, NgIf } from '@angular/common';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // for legacy purposes, add the NgFor & NgIf to the imports above 
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;
  
  get selectedUser() {
    return this.users.find((user => user.id === this.selectedUserId))!;
  }

  onSelectUser(id: string) {
    // console.log('Selected User with ID ' + id)
    this.selectedUserId = id;
  }
}
