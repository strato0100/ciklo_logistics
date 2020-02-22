import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import alertify from 'alertifyjs';
import { TruckModalComponent } from '../truck-modal/truck-modal.component';

@Component({
  selector: 'app-trucks-component',
  templateUrl: './trucks-component.component.html',
  styleUrls: ['./trucks-component.component.css']
})
export class TrucksComponentComponent implements OnInit {

  filter = '';
  trucks = [ ];
  allTrucks = [ ];

  constructor() { }

  ngOnInit(): void {
    let _vm = this;

    jQuery.ajax({
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

  onFilter(event: any) {
    this.filter = event.target.value;
    if (this.filter == '') this.trucks = this.allTrucks;
    else {
      this.trucks = this.allTrucks.filter(n => n.name.toUpperCase().includes(this.filter.toUpperCase()));
    }
  }

  toggle(toggle_target: any) {
    jQuery(toggle_target).slideToggle('fast');
  }

  add() {
    new TruckModalComponent().show(null);
  }

  show(user: any) {
    new TruckModalComponent().show(user);
  }

  remove(user: any, index: any, event: any) {
    event.stopPropagation();
    var vm = this;
    alertify.confirm('Confirm user removal', 'Are you sure to remove truck?', 
      function() { 
        vm.allTrucks.splice(index, 1);
        vm.trucks = vm.allTrucks;
        alertify.success('User deleted');
      },
      function() { }
    );
  }
}
