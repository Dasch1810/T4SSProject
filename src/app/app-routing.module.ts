import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpcomingMoviesComponent } from './movie/upcoming-movies/upcoming-movies.component';
import { MyListComponent } from './movie/my-list/my-list.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { WatchlistComponent } from './movie/watchlist/watchlist.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AdultComponent } from './movie/adult/adult.component';
import { AuthGuard } from './_guards';
import { HomeComponent } from './home';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path:'upcoming-movies',component: UpcomingMoviesComponent, canActivate: [AuthGuard] },
  {path: 'my-list', component: MyListComponent, canActivate: [AuthGuard] },
  {path: 'movie-details/:name', component: MovieDetailsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  {path: 'watchlist', component: WatchlistComponent, canActivate: [AuthGuard] },
  {path: 'contact-us', component: ContactUsComponent, canActivate: [AuthGuard] },
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'adult', component: AdultComponent, canActivate: [AuthGuard] },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
