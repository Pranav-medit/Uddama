import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
declare var require: any;
const Config = require('../../assets/configFile.json')
@Injectable({
  providedIn: 'root'
})
export class HomeService {
 
  constructor() { }

  getHomeConfig():Observable<any> {
    return of(Config);
  }
}
