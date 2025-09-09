import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BusesService } from '../buses.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bus-driver',
  templateUrl: './bus-driver.component.html',
  styleUrl: './bus-driver.component.scss',
})
export class BusDriverComponent implements OnInit {
  form!: FormGroup;
  actionName = this.data ? 'Update' : 'Save';
  constructor(
    public dialogRef: MatDialogRef<BusDriverComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private fb: FormBuilder,
    private busesService: BusesService,
    
  ) {}

  ngOnInit(): void {
    this.formBuild();
  }

  private formBuild() {
    this.form = this.fb.group({
      id: [this.data?.id ? this.data?.id : 0],
      name: [this.data?.name ? this.data?.name : ''],
      fatherName: [this.data?.fatherName ? this.data?.fatherName : ''],
      motherName: [this.data?.motherName ? this.data?.motherName : ''],
      phoneNumber: [this.data?.phoneNumber ? this.data?.phoneNumber : 0],
      email: [this.data?.email ? this.data?.email : ''],
      city: [this.data?.city ? this.data?.city : ''],
      district: [this.data?.district ? this.data?.district : ''],
      state: [this.data?.state ? this.data?.state : ''],
      country: [this.data?.country ? this.data?.country : ''],
      pinCode: [this.data?.pinCode ? this.data?.pinCode : 0],
      type: [this.data?.type ? this.data?.type : ''],
      active: [this.data?.active ? this.data?.active : false],
    });
  }

  close() {
    this.dialogRef.close();
  }

  action(){
    if(this.form){
      const payload ={
        ...this.form.value
      }

      this.busesService.CreateUpdateDriver(payload).subscribe({
              next: (res: any) => {
                // Use arrow function here to preserve 'this' context
                Swal.fire({
                  icon: 'success',
                  title: res.message,
                  background: '#f0f8ff', // Custom background color
                  color: '#004d00', // Custom text color
                  confirmButtonColor: '#007bff', // Custom button color
                  confirmButtonText: 'Continue', // Custom button text
                  customClass: {
                    popup: 'custom-popup', // Custom class for popup (optional)
                    confirmButton: 'custom-confirm-button',
                    cancelButton: 'custom-cancel-button',
                  },
                })
                 this.close()
              },
              error: (err) => {
                Swal.fire({
                  icon: 'success',
                  title: err,
                  background: '#f0f8ff', // Custom background color
                  color: '#004d00', // Custom text color
                  confirmButtonColor: '#007bff', // Custom button color
                  confirmButtonText: 'Continue', // Custom button text
                })
              },
            });
    }
  }
}
