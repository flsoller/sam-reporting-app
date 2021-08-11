import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { UserProfile } from '../user.model';
import { UserService } from '../user.service';

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

  userProfile: Observable<UserProfile> | null = null;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userProfile = this.userService.getProfile();

    this.initForm();
  }

  private initForm() {
    this.userProfile?.subscribe((profile) => {
      this.userForm.patchValue({
        userName: profile.name,
        userEmail: profile.email,
      });
    });
  }

  onSubmit() {}
}
