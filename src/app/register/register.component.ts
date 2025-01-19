import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm!: FormGroup;
  password: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.register();
  }

  ngOnDestroy() {}

  private register() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repassword: ['', [Validators.required]],
    });
  }

  action() {
    if (
      this.registerForm.valid &&
      this.registerForm.value.password == this.registerForm.value.repassword
    ) {
      const payload = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        phoneNumber: this.registerForm.value.phoneNumber,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      };
      this.authService.Register(this.registerForm.value).subscribe({
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
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/login']);
            }
          });
        },
        error: (err) => {
          alert(err);
        },
      });
    }
  }

  matchPassword() {
    ;
    if (
      this.registerForm.value.password != this.registerForm.value.repassword
    ) {
      this.password = 'Both password are not same. Please Enter Same Password';
    } else {
      this.password = '';
    }
  }
}
