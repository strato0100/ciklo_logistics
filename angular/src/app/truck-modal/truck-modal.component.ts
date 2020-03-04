import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import alertify from 'alertifyjs';

@Component({
  selector: 'app-truck-modal',
  templateUrl: './truck-modal.component.html',
  styleUrls: ['./truck-modal.component.css']
})
export class TruckModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show(truck: any, trucks: any, index: any): void {
    let _form = jQuery('.truck .form').form({
      fields: {
        name: [ 'empty' ],
        driver: [ 'empty' ]
      },
      onSuccess: function(event, fields) {
        if (truck) fields.truck_id = truck.truck_id;
        jQuery.ajax({
          url: '/api/truck/save',
          method: 'POST',
          data: fields
        }).done(function(r) {
          if (!r.success) alertify.error(r.error);
          else {
            if (truck) {
              alertify.success('Truck updated');
              trucks.splice(index, 1, r.data);
            } else {
              alertify.success('Truck created');
              trucks.push(r.data);
            }
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

    if (truck) {
      _form.form('set values', truck );
    }

    jQuery('.truck.modal').modal({
      onApprove: function() {
        _form.form('validate form');
        return _form.form('is valid');
      },
      onShow: function() {
        jQuery.ajax({
          url: '/api/drivers',
          method: 'GET',
          data: { }
        }).done(function(r) {
          if (!r.success) alertify.error(r.error);
          else {
            let _drivers = r.data.map(d => {
              return { value: d.driver_id, name: d.name };
            });
            jQuery('.driver.selection.dropdown').dropdown('setup menu', { values: _drivers })
          }
        }).fail(function(data) {
          console.error(data);
        });
      }
    }).modal('show');
  }
}
