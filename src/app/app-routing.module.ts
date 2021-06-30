import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'Home'}
  },
  {
    path: 'over-ons',
    component: AboutComponent,
    data: {title: 'Over Ons'}
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
