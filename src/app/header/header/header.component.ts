import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed= true;
  constructor() { }
  currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  currentUser = this.currentUserSubject.asObservable();
  @Input() loggedIn: boolean = true;
  ngOnInit() {
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    this.loggedIn = false;
    this.currentUserSubject.next(null);
}
}
