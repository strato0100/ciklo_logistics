import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityComponent } from './security/security.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { UsersComponentComponent } from './users-component/users-component.component';
import { DriversComponentComponent } from './drivers-component/drivers-component.component';
import { TrucksComponentComponent } from './trucks-component/trucks-component.component';
import { AssignationComponent } from './assignation/assignation.component';
import { DriverModalComponent } from './driver-modal/driver-modal.component';
import { TruckModalComponent } from './truck-modal/truck-modal.component';
import { ShippingsComponentComponent } from './shippings-component/shippings-component.component';
import { ShippingModalComponent } from './shipping-modal/shipping-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    PageNotFoundComponent,
    LoginComponent,
    UserModalComponent,
    UsersComponentComponent,
    DriversComponentComponent,
    TrucksComponentComponent,
    AssignationComponent,
    DriverModalComponent,
    TruckModalComponent,
    ShippingsComponentComponent,
    ShippingModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
