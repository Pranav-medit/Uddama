import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.scss']
})
export class CkEditorComponent implements OnInit {
  Editor: any;
  config = { height : '2500px'};
  ckEditorData = '<p>Hello world!!</p>';
  constructor() {
     this.Editor = ClassicEditor;
   }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.ckEditorData);
  }

}
