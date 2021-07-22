import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: SnackBarService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid) {
      this.snackBar.showSnackBar('Please fill out all fields.');
    }

    if (this.loginForm.valid) {
      this.authService.userLogin(email, password).subscribe((res) => {
        this.snackBar.showSnackBar(`Hi ${res.name}. Have fun today.`);
        console.log(res);
      });
    }
  }
}
