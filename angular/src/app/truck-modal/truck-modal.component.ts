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

  show(user: any): void {
    let _form = jQuery('.truck .form').form({
      fields: {
        name: [ 'empty' ],
        driver: [ 'empty' ]
      },
      onSuccess: function(event, fields) {
        if (user) fields.user_id = user.user_id;
        jQuery.ajax({
          url: '/api/truck/save',
          method: 'POST',
          data: fields
        }).done(function(r) {
          if (!r.success) alertify.error(r.error);
          else {
            if (user) alertify.success('Truck updated');
            else alertify.success('Truck created');
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

    if (user) {
      _form.form('set values', user );
    }

    jQuery('.truck.modal').modal({
      onApprove: function() {
        _form.form('validate form');
        return _form.form('is valid');
      }
    }).modal('show');
  }
}
