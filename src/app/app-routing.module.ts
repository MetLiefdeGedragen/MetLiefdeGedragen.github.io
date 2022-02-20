import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { StudentArticlesOverviewComponent } from './components/student-articles-overview/student-articles-overview.component';
import { StudentArticlesDetailComponent } from './components/student-articles-detail/student-articles-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home', state: 'home' },
  },
  {
    path: 'over-ons',
    component: AboutComponent,
    data: { title: 'Over Ons', state: 'over-ons' },
  },
  {
    path: 'how-to-midwife',
    component: StudentArticlesOverviewComponent,
    data: { title: 'How To Midwife', state: 'how-to-midwife' },
  },
  {
    path: 'how-to-midwife/:title',
    component: StudentArticlesDetailComponent,
    data: { title: 'How To Midwife', state: 'article' },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
