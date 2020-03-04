import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import alertify from 'alertifyjs';

@Component({
  selector: 'app-driver-modal',
  templateUrl: './driver-modal.component.html',
  styleUrls: ['./driver-modal.component.css']
})
export class DriverModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show(driver: any, drivers: any, index: any): void {
    let _form = jQuery('.driver .form').form({
      fields: {
        name: [ 'empty' ]
      },
      onSuccess: function(event, fields) {
        if (driver) fields.driver_id = driver.driver_id;
        jQuery.ajax({
          url: '/api/driver/save',
          method: 'POST',
          data: fields
        }).done(function(r) {
          if (!r.success) alertify.error(r.error);
          else {
            if (driver) {
              alertify.success('Driver updated');
              drivers.splice(index, 1, r.data);
            } else {
              alertify.success('Driver created');
              drivers.push(r.data);
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

    if (driver) {
      _form.form('set values', driver );
    }

    jQuery('.driver.modal').modal({
      onApprove: function() {
        return _form.form('validate form');
      }
    }).modal('show');
  }
}
