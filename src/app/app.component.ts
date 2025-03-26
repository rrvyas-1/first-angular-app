import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId: string = 'u1';

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
}
