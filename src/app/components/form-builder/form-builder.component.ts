import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProfileService } from 'src/app/service/profile.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  @ViewChild('profileGroup1') form;

  ProfileInfo = [];
  constructor(private fb: FormBuilder,
              private profileService: ProfileService,
              private spinner: NgxSpinnerService,
              private snackBar: SnackBarService ) {

  }
  profileGroup = this.fb.group({
    name: ['', Validators.required],
    dateOfBirth: ['', [Validators.required, Validators.pattern('^([0]?[1-9]|[1|2][0-9]|[3][0|1])[-]([0]?[1-9]|[1][0-2])[-]([0-9]{4}|[0-9]{2})$')]],
    about: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.spinner.show();
    const postObject: any = {};
    postObject.name = this.profileGroup.value.name;
    postObject.data = JSON.stringify(this.profileGroup.value);
    this.ProfileInfo.push(postObject);
    console.log(this.ProfileInfo);
    this.profileService.saveProfile(postObject).subscribe((savedRes) => {
      this.snackBar.openSnackBar(`Form Submitted Successfully`, 'Done');
      setTimeout(() => {
        console.log("Res =", savedRes);
        this.form.resetForm();
        this.spinner.hide();
      }, 1000);
    }, error => {
      this.spinner.hide();
      const snackbarRef = this.snackBar.openSnackBar(`An error occurred ${error}`, 'Retry');
      snackbarRef.onAction().subscribe(() => {

        // Snack bar action
        // If retry is clicked then restart subscription
        // this.getProfiles();
        // console.log('The snack-bar action was triggered!');
      });
      console.log("Error =", error);
    })
  }

}
