import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  optionsArray = [
    {
      displayName:'Carousel', width:99 
    },
    {
      displayName:'Slider 1', width:48 
    },
    {
      displayName:'Slider 2' , width:48
    },
    {
      displayName:'Tab View' , width:99
    },
    {
      displayName:'Trending' , width:48
    },
    {
      displayName:'Video', width:48
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
        each.width = 99;
      }
      if(index === 1){
        each.width = 48;
      }
      if(index === 2){
        each.width = 48;
      }
      if(index === 3){
        each.width = 99;
      }
      if(index === 4){
        each.width = 48;
      }
      if(index === 5){
        each.width = 48;
      }
    })
  } 

  saveLayout(){
    console.log('save');
  }
}
