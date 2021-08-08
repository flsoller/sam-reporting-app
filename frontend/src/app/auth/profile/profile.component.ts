import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  // Form builder
  userForm = this.fb.group({
    userName: [null, [Validators.required]],
    userEmail: [null, [Validators.email, Validators.required]],
    passwordChange: this.fb.group({
      currentPassword: [null],
      newPassword: [null],
      passwordConfirm: [null],
    }),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {}
}
