import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bus-driver',
  templateUrl: './bus-driver.component.html',
  styleUrl: './bus-driver.component.scss',
})
export class BusDriverComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<BusDriverComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  private formBuild() {
    this.form = this.fb.group({
      id: [this.data.id ? this.data.id : 0],
      driverId: [this.data.driverId ? this.data.driverId : 0, Validators.required],
      name: [this.data.name ? this.data.name : ''],
      fatherName: [this.data.fatherName ? this.data.fatherName : ''],
      motherName: [this.data.motherName ? this.data.motherName : ''],
      phoneNumber: [this.data.phoneNumber ? this.data.phoneNumber : 0],
      email: [this.data.email ? this.data.email : ''],
      city: [this.data.city ? this.data.city : ''],
      district: [this.data.district ? this.data.district : ''],
      state: [this.data.state ? this.data.state : ''],
      country: [this.data.country ? this.data.country : ''],
      pinCode: [this.data.pinCode ? this.data.pinCode : 0],
      type: [this.data.type ? this.data.type : ''],
      active: [this.data.active ? this.data.active : false],
    });
  }

  close() {
    this.dialogRef.close();
  }

  action(){
    
  }
}
