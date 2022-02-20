import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-articles-detail',
  templateUrl: './student-articles-detail.component.html',
  styles: [],
})
export class StudentArticlesDetailComponent implements OnInit {
  htmlFile: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    let title = this.route.snapshot.params['title'];
    let path = 'assets/articles/' + title + '-article.html';
    this.http
      .get(path, {
        responseType: 'text',
      })
      .subscribe((res) => {
        this.htmlFile = this.sanitizer.bypassSecurityTrustHtml(res);
      });
  }
}
