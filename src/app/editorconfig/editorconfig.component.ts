import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as ace from 'ace-builds'; // ace module ..
// language package, choose your own 
import 'ace-builds/src-noconflict/mode-javascript';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
// ui-theme package

import 'ace-builds/src-noconflict/theme-github';


const THEME = 'ace/theme/github'; 
const LANG = 'ace/mode/javascript';

@Component({
  selector: 'app-editorconfig',
  templateUrl: './editorconfig.component.html',
  styleUrls: ['./editorconfig.component.css']
})
export class EditorconfigComponent implements OnInit {


  @ViewChild('codeEditor',{static:true}) codeEditorElmRef: ElementRef;
  private codeEditor: ace.Ace.Editor;
  constructor() { }

  ngOnInit() {
    const element = this.codeEditorElmRef.nativeElement;
    const editorOptions: Partial<ace.Ace.EditorOptions> = {
        highlightActiveLine: true,
        minLines: 10,
        maxLines: Infinity,
    };

    this.codeEditor = ace.edit(element, editorOptions);
    
    this.codeEditor.setTheme(THEME);
    this.codeEditor.getSession().setMode(LANG);
    
    this.codeEditor.setShowFoldWidgets(true); // for the scope fold feature
  }

  getit(){
    const code = this.codeEditor.getValue();
    this.codeEditor.setValue("")
    console.log(code);
    this.codeEditor.setValue(code)
  }

}
