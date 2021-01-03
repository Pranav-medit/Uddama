import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  optionsArray = [
    {
      displayName:'Carousel', width:100 
    },
    {
      displayName:'Slider 1', width:50 
    },
    {
      displayName:'Slider 2' , width:50
    },
    {
      displayName:'Tab View' , width:100
    },
    {
      displayName:'Trending' , width:50
    },
    {
      displayName:'Video', width:50 
    }
  ];
  constructor() { }
   
  ngOnInit(): void {
  }
  
  setOrder(type, index){
    if(type === 'upward'){
      const currentObj = this.optionsArray[index];
      const previousObj = this.optionsArray[index - 1];
      this.optionsArray[index] = previousObj;
      this.optionsArray[index - 1] = currentObj; 
    }else {
      console.log('down', this.optionsArray, index);
      const currentObj = this.optionsArray[index];
      const nextObj = this.optionsArray[index+1];
      this.optionsArray[index] = nextObj;
      this.optionsArray[index+1] = currentObj; 
    }
    this.optionsArray.forEach((each:any, index)=>{
      if(index === 0){
        each.width = 100;
      }
      if(index === 1){
        each.width = 50;
      }
      if(index === 2){
        each.width = 50;
      }
      if(index === 3){
        each.width = 100;
      }
      if(index === 4){
        each.width = 50;
      }
      if(index === 5){
        each.width = 50;
      }
    })
  } 
}
