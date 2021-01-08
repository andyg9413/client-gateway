import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-gateway',
  templateUrl: './update-gateway.component.html',
  styleUrls: ['./update-gateway.component.css']
})
export class UpdateGatewayComponent implements OnInit {

  public fname: string = `Ramesh`;
  public lname: string = `Suresh`;
  public addCusForm: FormGroup;
  updateForm: FormGroup;
  gatewayInformation: any;
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
    console.log(id)
    this.apiService.getGateway(id).subscribe(e => {
      if (e) {
        this.gatewayInformation = e;
      }
    });
  }

  formChanged() {
    this.wasFormChanged = true;
  }

  openDialogUpdate(): void {
    const name = (document.querySelector('#name') as HTMLInputElement).value;
    const ip = (document.querySelector('#ip') as HTMLInputElement).value;
    const id = this.gatewayInformation._id;
    console.log(name);
    console.log(ip);
    console.log(id);
    this.apiService.updateGateway({id, data: {name, ip}}).subscribe(data => {
      console.log(data);
      this.dialog.closeAll();
    });
  }

}
