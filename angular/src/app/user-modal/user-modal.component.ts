import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import alertify from 'alertifyjs';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  // user: { };

  constructor() {  }

  ngOnInit(): void {
  }

  show(user: any, users: any, index: any): void {
    let _form = jQuery('.user .form').form({
      fields: {
        username: [ 'empty' ]
      },
      onSuccess: function(event, fields) {
        if (user) fields.user_id = user.user_id;
        jQuery.ajax({
          url: '/api/user/save',
          method: 'POST',
          data: fields
        }).done(function(r) {
          if (!r.success) alertify.error(r.error);
          else {
            if (user) {
              alertify.success('User updated');
              users.splice(index, 1, r.data);
            } else {
              alertify.success('User created');
              users.push(r.data);
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

    if (user) {
      _form.form('set values', user );
    }

    jQuery('.user.modal').modal({
      onApprove: function() {
        _form.form('validate form');
        return _form.form('is valid');
      }
    }).modal('show');
  }
}