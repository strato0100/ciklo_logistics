import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import alertify from 'alertifyjs';
import { DriverModalComponent } from '../driver-modal/driver-modal.component';

@Component({
  selector: 'app-drivers-component',
  templateUrl: './drivers-component.component.html',
  styleUrls: ['./drivers-component.component.css']
})
export class DriversComponentComponent implements OnInit {

  filter = '';
  drivers = [ ];
  allDrivers = [ ];

  constructor() { }

  ngOnInit(): void {
    let _vm = this;
    jQuery.ajax({
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
  }

  onFilter(event: any) {
    this.filter = event.target.value;
    if (this.filter == '') this.drivers = this.allDrivers;
    else {
      this.drivers = this.allDrivers.filter(n => n.name.toUpperCase().includes(this.filter.toUpperCase()));
    }
  }

  toggle(toggle_target: any) {
    jQuery(toggle_target).slideToggle('fast');
  }

  add() {
    new DriverModalComponent().show(null, this.drivers, null);
  }

  show(driver: any, index: any) {
    new DriverModalComponent().show(driver, this.drivers, index);
  }

  remove(driver: any, index: any, event: any) {
    event.stopPropagation();
    var vm = this;
    alertify.confirm('Confirm driver removal', 'Are you sure to remove driver?', 
      function() { 
        vm.allDrivers.splice(index, 1);
        vm.drivers = vm.allDrivers;
        alertify.success('Driver deleted');
      },
      function() { }
    );
  }
}
