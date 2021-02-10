import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { user } from '../../user';

@Component({
  templateUrl: './billing.component.html',
})
export class BillingComponent {
  userForm: FormGroup;
  post: user;

  constructor(
    public formBuilder: FormBuilder,
    public dialog: MatDialog,
    public dataService: DataService
  ) {
    this.validateUserForm();
  }

  public validateUserForm(): void {
    this.userForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      address: [null, [Validators.required]],
    });
  }

  onSubmit(post): void {
    this.post = post;
    this.dataService.setUserDetails(post);

    if (post) {
      this.dialog.open(DialogComponent);
    }
  }
}
