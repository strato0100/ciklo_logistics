import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      setTimeout(function() {
        /*$('.login.form').form({
          fields: {
            email: [ 'empty', 'email' ],
            password: [ 'empty' ]
          },
          onSuccess: function(event, fields) {
            event.preventDefault();
            console.log(fields);
            $.ajax({
              url: '/api/login',
              method: 'POST',
              data: {
                username: fields.email,
                password: fields.password,
              }
            }).done(function(data) {
              console.log(data);
            }).fail(function(data) {
              console.error(data);
            });
          }
        });*/
      }, 3000);
    });
  }

}
