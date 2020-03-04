import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import alertify from 'alertifyjs';
import { ShippingModalComponent } from '../shipping-modal/shipping-modal.component';

@Component({
  selector: 'app-shippings-component',
  templateUrl: './shippings-component.component.html',
  styleUrls: ['./shippings-component.component.css']
})
export class ShippingsComponentComponent implements OnInit {

  filter = '';
  shippings = [ ];
  allShippings = [ ];

  constructor() { }

  ngOnInit(): void {
    let _vm = this;
    jQuery.ajax({
      url: '/api/shippings',
      method: 'GET',
      data: { }
    }).done(function(r) {
      if (!r.success) alertify.error(r.error);
      else {
        _vm.shippings = r.data;
        _vm.allShippings = r.data;
      }
    }).fail(function(data) {
      console.error(data);
    });
  }

  onFilter(event: any) {
    this.filter = event.target.value;
    if (this.filter == '') this.shippings = this.allShippings;
    else {
      this.shippings = this.allShippings.filter(n => n.name.toUpperCase().includes(this.filter.toUpperCase()) || n.source.toUpperCase().includes(this.filter.toUpperCase()) || n.target.toUpperCase().includes(this.filter.toUpperCase()));
    }
  }

  toggle(toggle_target: any) {
    jQuery(toggle_target).slideToggle('fast');
  }

  add() {
    new ShippingModalComponent().show(null, this.shippings, null);
  }

  show(user: any, index: any) {
    new ShippingModalComponent().show(user, this.shippings, index);
  }

  remove(user: any, index: any, event: any) {
    event.stopPropagation();
    var vm = this;
    alertify.confirm('Confirm cancel shipping', 'Are you sure to cancel shipping?', 
      function() { 
        vm.allShippings.splice(index, 1);
        vm.shippings = vm.allShippings;
        alertify.success('Shipping cancelled');
      },
      function() { }
    );
  }
}
