import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import alertify from 'alertifyjs';
import { UserModalComponent } from '../user-modal/user-modal.component';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent implements OnInit {

  filter = '';
  users = [ ];
  allUsers = [ ];

  constructor() { }

  ngOnInit(): void {
    let _vm = this;
    jQuery.ajax({
      url: '/api/users',
      method: 'GET',
      data: { }
    }).done(function(r) {
      if (!r.success) alertify.error(r.error);
      else {
        _vm.users = r.data;
        _vm.allUsers = r.data;
      }
    }).fail(function(data) {
      console.error(data);
    });
  }

  onFilter(event: any) {
    this.filter = event.target.value;
    if (this.filter == '') this.users = this.allUsers;
    else {
      this.users = this.allUsers.filter(n => n.username.toUpperCase().includes(this.filter.toUpperCase()));
    }
  }

  toggle(toggle_target: any) {
    jQuery(toggle_target).slideToggle('fast');
  }

  add() {
    new UserModalComponent().show(null);
  }

  show(user: any) {
    new UserModalComponent().show(user);
  }

  remove(user: any, index: any, event: any) {
    event.stopPropagation();
    var vm = this;
    alertify.confirm('Confirm user removal', 'Are you sure to remove user?', 
      function() { 
        vm.allUsers.splice(index, 1);
        vm.users = vm.allUsers;
        alertify.success('User deleted');
      },
      function() { }
    );
  }
}
