import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    jQuery(document).ready(function(){
      let _form = jQuery('.login.form').form({
        fields: {
          email: [ 'empty', 'email' ],
          password: [ 'empty' ]
        },
        onSuccess: function(event, fields) {
          event.preventDefault();
          jQuery.ajax({
            url: '/api/login',
            method: 'POST',
            data: {
              username: fields.email,
              password: fields.password,
            }
          }).done(function(data) {
            if (!data.success) _form.form('add errors', [ 'Invalid authentication' ]);
            else location.href = '/shipping';
          }).fail(function(data) {
            console.error(data);
          });
        }
      });
    });
  }

}
