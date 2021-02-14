import { Injectable } from '@angular/core';
import { from, Observable , of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { SaveProfileValues } from '../Interface/profile.interface';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }


  saveProfile(payload:SaveProfileValues) {
    const url = 'http://35.202.105.222/create-profile';
    return this.http.post(url, payload);
  }

  getProfiles(){
    const url = 'http://35.202.105.222/get-profile';
    return this.http.get(url); 
  }

}
