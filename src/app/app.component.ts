import { Component } from '@angular/core';
// import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent]
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
