import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StudentArticlesOverviewComponent } from './components/student-articles-overview/student-articles-overview.component';
import { CtgArticleComponent } from './components/_studentArticles/ctg-article/ctg-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    StudentArticlesOverviewComponent,
    CtgArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
