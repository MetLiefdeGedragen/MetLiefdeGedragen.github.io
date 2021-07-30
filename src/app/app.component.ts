import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {filter, map} from "rxjs/operators";
import {fadeAnimation} from "./animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          } else {
            return null;
          }
        }
        return null;
      })
    ).subscribe((data: any) => {
      if (data) {
        this.titleService.setTitle('Met Liefde Gedragen | ' + data);
      }
    });
  }

  public getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
