import { Component,Input, Output,EventEmitter ,output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required:true}) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  
  @Output() select = new EventEmitter<string>();

  // select =output<string>();

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() {
    this.select
      .emit(this.id);
  }
}
