import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  screenHeight = {}; 
  optionsArray = [];
  componentList = [
    {
      displayName:'Carousel', width:99 
    },
    {
      displayName:'Slider', width:48 
    }
  ]
  constructor(public dialog: MatDialog) { 
   
    //this.screenHeight ={height: window.screen.height - 200 + 'px'};
    //this.screenHeight ={height:70 + 'px'};
  }
   
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
      // if(index === 0){
      //   each.width = 99;
      // }
      // if(index === 1){
      //   each.width = 48;
      // }
      // if(index === 2){
      //   each.width = 48;
      // }
      // if(index === 3){
      //   each.width = 99;
      // }
      // if(index === 4){
      //   each.width = 48;
      // }
      // if(index === 5){
      //   each.width = 48;
      // }
      if(each.displayName === 'Carousel'){
        each.width = 99;
      }else {
        each.width = 48;
      }
    })
  } 

  saveLayout(){
    console.log('save', this.optionsArray);
  }

  addComponent(component){
    this.optionsArray.push(component);
  }

  editCategory(option,index){
    const dialogRef = this.dialog.open(DialogBoxComponent,{width: '400px', data: JSON.parse(JSON.stringify(option))});

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.optionsArray[index] = result;
      }
    });
  }
}
