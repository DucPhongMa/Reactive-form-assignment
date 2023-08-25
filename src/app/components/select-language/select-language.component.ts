import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
   }


  ngOnInit(): void {
  }

  language:number=0;
  languages:string[]=["en", "fr"];
  
  public changeLang(){
    this.language++;

    if (this.language==this.languages.length){
      this.language=0;
    }
    this.translate.use(this.languages[this.language]);
  } 
}
