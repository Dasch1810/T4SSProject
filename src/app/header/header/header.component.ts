import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/_models';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed= true;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }
  @Input() currentUser: User;
  @Input() currentUserSubject;
  ngOnInit(
  ) {
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    this.currentUserSubject.next(null);
    this.authenticationService.logout();
      this.router.navigate(['/login']);
}
}
