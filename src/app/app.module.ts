import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiService} from './services/api.service';
import {HttpClientModule} from '@angular/common/http';
import { PaginatePipe } from './pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatInput, MatInputModule} from '@angular/material/input';
import { UpdateDeviceComponent } from './components/update-device/update-device.component';
import { AddGatewayComponent } from './components/add-gateway/add-gateway.component';
import { UpdateGatewayComponent } from './components/update-gateway/update-gateway.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginatePipe,
    AddDeviceComponent,
    UpdateDeviceComponent,
    AddGatewayComponent,
    UpdateGatewayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
