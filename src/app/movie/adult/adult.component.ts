import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-adult',
  templateUrl: './adult.component.html',
  styleUrls: ['./adult.component.css']
})
export class AdultComponent implements OnInit {
  public safeURL: SafeResourceUrl;
  adult1: boolean= false;
  tooYoung= false;
  babyImgUrl= "https://storage.googleapis.com/www-24baby-cloud/2017/01/Baby-met-veel-haren.jpg"
  question= true;
  constructor(private _sanitizer: DomSanitizer){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/3UjuYtgMDIg');
 }
ageCheck(){
  this.tooYoung = true;
  this.question = false;
}
validate1(){
  this.adult1=true;
}
  ngOnInit() {
  }

}
