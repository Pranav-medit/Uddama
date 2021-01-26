import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
 ProfileInfo = [];
 constructor(private fb: FormBuilder){
 
 } 
  profileGroup = this.fb.group({
     name : ['', Validators.required],
     dateOfBirth : ['', [Validators.required, Validators.pattern('([0-9]{2}[-]{1}){2}[0-9]{4}')]],
     about : ['', Validators.required]
  })

  ngOnInit(): void {
  }

  onSubmit(){
    this.ProfileInfo.push(this.profileGroup.value);
    console.log(this.ProfileInfo);
  }

}
