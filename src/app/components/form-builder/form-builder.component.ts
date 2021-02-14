import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
 ProfileInfo = [];
 constructor(private fb: FormBuilder, private profileService: ProfileService){
 
 } 
  profileGroup = this.fb.group({
     name : ['', Validators.required],
     dateOfBirth : ['', [Validators.required, Validators.pattern('^([0]?[1-9]|[1|2][0-9]|[3][0|1])[-]([0]?[1-9]|[1][0-2])[-]([0-9]{4}|[0-9]{2})$')]],
     about : ['', Validators.required]
  })

  ngOnInit(): void {
  }

  onSubmit(){
    const postObject:any = {};
    postObject.name = this.profileGroup.value.name;
    postObject.data = JSON.stringify(this.profileGroup.value);
    this.ProfileInfo.push(postObject);
    console.log(this.ProfileInfo);
    this.profileService.saveProfile(postObject).subscribe((savedRes) => {
        console.log("Res =" ,savedRes);
    }, error => {
        console.log("error =" , error);
    })
  }

}
