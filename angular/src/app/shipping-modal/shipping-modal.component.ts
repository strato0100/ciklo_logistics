import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import alertify from 'alertifyjs';

@Component({
  selector: 'app-shipping-modal',
  templateUrl: './shipping-modal.component.html',
  styleUrls: ['./shipping-modal.component.css']
})
export class ShippingModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show(shipping: any): void {
    let _form = jQuery('.shipping .form').form({
      fields: {
        source: [ 'empty' ],
        target: [ 'empty' ],
        truck: [ 'empty' ],
      },
      onSuccess: function(event, fields) {
        if (shipping) fields.shipping_id = shipping.shipping_id;
        jQuery.ajax({
          url: '/api/shipping/save',
          method: 'POST',
          data: fields
        }).done(function(r) {
          if (!r.success) alertify.error(r.error);
          else {
            if (shipping) alertify.success('Shipping updated');
            else alertify.success('Shipping created');
          }
        }).fail(function(data) {
          _form.form('add errors', [ data ])
          return false;
        });
      },
      onHidden: function() {
        _form.form('reset');
      }
    })

    if (shipping) {
      _form.form('set values', shipping );
    }

    jQuery('.shipping.modal').modal({
      onApprove: function() {
        _form.form('validate form');
        return _form.form('is valid');
      },
      onShow: function() {
        jQuery.ajax({
          url: '/api/trucks',
          method: 'GET',
          data: { }
        }).done(function(r) {
          if (!r.success) alertify.error(r.error);
          else {
            let _trucks = r.data.map(t => {
              return { value: t.truck_id, name: t.name };
            });
            jQuery('.truck.selection.dropdown').dropdown('setup menu', { values: _trucks })
          }
        }).fail(function(data) {
          console.error(data);
        });
      }
    }).modal('show');
  }
}
