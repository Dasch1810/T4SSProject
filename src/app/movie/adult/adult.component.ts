import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-adult',
  templateUrl: './adult.component.html',
  styleUrls: ['./adult.component.scss']
})
export class AdultComponent implements OnInit {
  public safeURL: SafeResourceUrl;
  adult1: boolean= false;
  tooYoung= false;
  babyImgUrl= "http://www.quickmeme.com/img/15/15abdb2bae3ef9602995a1e3619f93350cdebfce133b501a4d714b97746e11a4.jpg"
  question= true;
  constructor(private _sanitizer: DomSanitizer){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/3UjuYtgMDIg?autoplay=1&loop=1&start=17');
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
