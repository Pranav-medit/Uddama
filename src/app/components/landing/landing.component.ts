import { Component, OnInit } from '@angular/core';
import { getProfiles } from 'src/app/Interface/profile.interface';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProfileService } from 'src/app/service/profile.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  ProfileList: getProfiles;
  constructor(private profileService: ProfileService, private spinner: NgxSpinnerService, private snackBar: SnackBarService) {
  }
  getProfiles(): void{
    // Show spinner on starting data request
    this.spinner.show();
    this.profileService.getProfiles().subscribe((profileList: getProfiles) => {
      console.log(profileList);
      this.ProfileList = profileList;

      // Hide spinner when we get profile
      this.spinner.hide();
    }, (error) => {
      // Hide spinner when we get error
      this.spinner.hide();

      console.log(error);
      //  Create snackbar ref to manipulate snackbar
      const snackbarRef = this.snackBar.openSnackBar(`An error occurred ${error}`, 'Retry');
      snackbarRef.onAction().subscribe(() => {

        // Snack bar action
        // If retry is clicked then restart subscription
        this.getProfiles();
        // console.log('The snack-bar action was triggered!');
      });
    });
  }
  ngOnInit(): void {
     this.getProfiles();
  }
}
