import { Component, OnInit, OnDestroy } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  private sub: Subscription;

  constructor(
    private titleService: Title,
    private router: Router,
    private metaService: Meta
  ) { }

  ngOnInit() {
    this.setPageTitlesAndMeta();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private setPageTitlesAndMeta() {
    this.sub = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.router.routerState.root)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .switchMap(route => route.data)
      .subscribe(
        data => {
          this.titleService.setTitle(data['title']);
          this.metaService.addTags(data['meta']);
        }
      );
  }
}
