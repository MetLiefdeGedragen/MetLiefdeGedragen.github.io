import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";
import {StudentArticlesOverviewComponent} from "./components/student-articles-overview/student-articles-overview.component";
import {CtgArticleComponent} from "./components/_studentArticles/ctg-article/ctg-article.component";
import {AnesthesieEnAnalgesieArticleComponent} from "./components/_studentArticles/anesthesie-en-analgesie-article/anesthesie-en-analgesie-article.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'Home', state: 'home'}
  },
  {
    path: 'over-ons',
    component: AboutComponent,
    data: {title: 'Over Ons', state: 'over-ons'}
  },
  {
    path: 'how-to-midwife',
    component: StudentArticlesOverviewComponent,
    data: {title: 'How To Midwife', state: 'how-to-midwife'}
  },
  {
    path: 'how-to-midwife/ctg',
    component: CtgArticleComponent,
    data: {title: 'CTG', state: 'ctg'},
  },
  {
    path: 'how-to-midwife/anesthesie-en-analgesie',
    component: AnesthesieEnAnalgesieArticleComponent,
    data: {title: 'Anesthesie en analgesie', state: 'anesthesie-en-analgesie'},
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
