import { Component, Input, OnInit } from '@angular/core';
import { getProfiles } from 'src/app/Interface/profile.interface';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() profile:getProfiles; 

  cardStyle = {
    maxHeight: '520',
    maxWidth: '300',
    margin: '40',
    imgHeight: '200'
  };
  constructor() {
    
   }

  ngOnInit(): void {
    this.profile.data = JSON.parse(this.profile.data);
    console.log(this.profile);
  }

}
