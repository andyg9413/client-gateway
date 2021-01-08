import {Component, Inject, OnInit, VERSION, ViewChild} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
  public fname: string = `Ramesh`;
  public lname: string = `Suresh`;
  public addCusForm: FormGroup;
  wasFormChanged = false;
  statuses = ['ONLINE', 'OFFLINE'];

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public ngOnInit(): void {
    this.addCusForm = this.fb.group({
      IdProof: null,
      firstname: [this.fname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      lastname: [this.lname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  openDialog(): void {
    console.log(this.wasFormChanged);
    const vendor = (document.querySelector('#vendor') as HTMLInputElement).value;
    const status = (document.querySelector('#status') as HTMLInputElement).value;
    console.log(vendor);
   this.apiService.addDevice({vendor, status, gatewayId: this.data.gatewayId}).subscribe(data => {
     console.log(data);
     this.dialog.closeAll();
   });
  }


  formChanged() {
    this.wasFormChanged = true;
  }

}
