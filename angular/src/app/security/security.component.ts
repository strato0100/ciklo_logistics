import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UserModalComponent } from '../user-modal/user-modal.component';
import alertify from 'alertifyjs';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  usersFilter = '';
  driversFilter = '';
  trucksFilter = '';
  users = [ ];
  allUsers = [ ];
  drivers = [ ];
  allDrivers = [ ];
  trucks = [ ];
  allTrucks = [ ];

  constructor() { }

  ngOnInit(): void {
    let _vm = this;
    $.ajax({
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

    $.ajax({
      url: '/api/drivers',
      method: 'GET',
      data: { }
    }).done(function(r) {
      if (!r.success) alertify.error(r.error);
      else {
        _vm.drivers = r.data;
        _vm.allDrivers = r.data;
      }
    }).fail(function(data) {
      console.error(data);
    });

    $.ajax({
      url: '/api/trucks',
      method: 'GET',
      data: { }
    }).done(function(r) {
      if (!r.success) alertify.error(r.error);
      else {
        _vm.trucks = r.data;
        _vm.allTrucks = r.data;
      }
    }).fail(function(data) {
      console.error(data);
    });
  }

  onUsersFilter(event: any) {
    this.usersFilter = event.target.value;
    if (this.usersFilter == '') this.users = this.allUsers;
    else {
      this.users = this.allUsers.filter(n => n.username.toUpperCase().includes(this.usersFilter.toUpperCase()));
    }
  }

  onDriversFilter(event: any) {
    this.driversFilter = event.target.value;
    if (this.driversFilter == '') this.drivers = this.allDrivers;
    else {
      this.drivers = this.allDrivers.filter(n => n.name.toUpperCase().includes(this.driversFilter.toUpperCase()));
    }
  }

  onTrucksFilter(event: any) {
    this.trucksFilter = event.target.value;
    if (this.trucksFilter == '') this.trucks = this.allTrucks;
    else {
      this.trucks = this.allTrucks.filter(n => n.name.toUpperCase().includes(this.trucksFilter.toUpperCase()));
    }
  }

  toggle(toggle_target: any) {
    $(toggle_target).slideToggle('fast');
  }

  add() {
    var userModal = new UserModalComponent();
    console.log(userModal);
    //$(userModal).modal('show');
  }

  delete_user(user: any) {
    alertify.confirm('Confirm Title', 'Confirm Message', function(){ alertify.success('Ok') }
                , function(){ alertify.error('Cancel')});
    console.log(user);
  }
}
