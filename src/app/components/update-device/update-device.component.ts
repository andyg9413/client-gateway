import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit {

  public fname: string = `Ramesh`;
  public lname: string = `Suresh`;
  public addCusForm: FormGroup;
  updateForm: FormGroup;
  deviceInformation: any;
  wasFormChanged = false;
  statuses = ['ONLINE', 'OFFLINE'];


  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public ngOnInit(): void {
    this.addCusForm = this.fb.group({
      IdProof: null,
      firstname: [this.fname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      lastname: [this.lname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      email: [null, [Validators.required, Validators.email]],
    });
    this.informationRefresh(this.data.id).catch();
  }

  async informationRefresh(id: string): Promise<void> {
    this.apiService.getDevice(id).subscribe(e => {
      if (e) {
        this.deviceInformation = e;
      }
    });
  }

  formChanged() {
    this.wasFormChanged = true;
  }

  openDialogUpdate(): void {
    const vendor = (document.querySelector('#vendor') as HTMLInputElement).value;
    const status = (document.querySelector('#status') as HTMLInputElement).value;
    const id = this.deviceInformation._id;
    this.apiService.updateDevice({id, data: {vendor, status}}).subscribe(data => {
      console.log(data);
      this.dialog.closeAll();
    });
  }

}
