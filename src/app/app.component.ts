import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";
import {Gateway} from "./shared/interfaces";
import {PageEvent} from "@angular/material/paginator";
import {AddDeviceComponent} from "./components/add-device/add-device.component";
import {MatDialog} from "@angular/material/dialog";
import {UpdateDeviceComponent} from "./components/update-device/update-device.component";
import {AddGatewayComponent} from "./components/add-gateway/add-gateway.component";
import {UpdateGatewayComponent} from "./components/update-gateway/update-gateway.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  gateways: Gateway[] = [];
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];
  id: string;
  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.apiService.getGateways().subscribe(g => this.gateways = g.data);
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  openDialog(i: number): void {
    const dialogRef = this.dialog.open(AddDeviceComponent,{
      width: '640px', data: {gatewayId: this.gateways[i]._id}
    });
  }
  openDialogUpdate(i: number, j: number): void {
    const dialogRef = this.dialog.open(UpdateDeviceComponent,{
      width: '640px', data: {id: this.gateways[i].devices[j]._id}
    });
  }

  openDialogDelete(i: number, j: number): void {
    this.apiService.deleteDevice(this.gateways[i].devices[j]._id).subscribe(data => {
      console.log(data);
      this.dialog.closeAll();
    });
  }

  openDialogAddGateway(): void {
    const dialogRef = this.dialog.open(AddGatewayComponent,{
      width: '640px',
    });
  }

  openDialogUpdateGateway(i: number): void {
    const dialogRef = this.dialog.open(UpdateGatewayComponent,{
      width: '640px', data: {id: this.gateways[i]._id}
    });
  }

  openDialogDeleteGateway(i: number): void {
    this.apiService.deleteGateway(this.gateways[i]._id).subscribe(data => {
      console.log(data);
      this.dialog.closeAll();
    });
  }


}
