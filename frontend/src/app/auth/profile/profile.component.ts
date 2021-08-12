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

  onSubmit() {
    const valid = this.userForm.valid;
    const email = this.userForm.value.userEmail;
    const name = this.userForm.value.userName;
    const currentPw = this.userForm.value.passwordChange.currentPassword;
    const newPw = this.userForm.value.passwordChange.newPassword;
    const confirmPw = this.userForm.value.passwordChange.passwordConfirm;

    if (valid && currentPw && newPw === confirmPw) {
      this.userService.updateUserAndPassword(email, currentPw, name, confirmPw);
    }

    if (valid && !currentPw && !newPw) {
      this.userService.updateUser(email, name);
    }
  }
}
