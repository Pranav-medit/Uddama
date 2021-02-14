import { Component, OnInit } from '@angular/core';
import { getProfiles } from 'src/app/Interface/profile.interface';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  ProfileList: getProfiles;
  constructor(private profileService: ProfileService) {
    this.profileService.getProfiles().subscribe((profileList:getProfiles) => {
         console.log(profileList);
         this.ProfileList = profileList;
    }, error =>{
         console.log(error);
    })
   }

  ngOnInit(): void {
  }

}
