import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { BkLayout } from '@uibakery/kit';
import { Store } from '@ngrx/store';
import { LayoutActions } from './state/layout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  defaultLayout: BkLayout = {
    header: true,
    sidebar: true,
    paddings: {
      paddingTop: 16,
      paddingRight: 16,
      paddingBottom: 16,
      paddingLeft: 16
    }
  };

  layout$: Observable<BkLayout> = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.router.routerState.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.snapshot.data['layout'] || this.defaultLayout;
      }),
      shareReplay(),
    );

  padding$: Observable<string> = this.layout$
    .pipe(
      map((layout: BkLayout) => {
        const p = layout.paddings;
        return `${p.paddingTop}px ${p.paddingRight}px ${p.paddingBottom}px ${p.paddingLeft}px`;
      }),
    );
  items =   [
    {
      "title": "Home",
      "link": "/home",
      "children": null
    },
    {
      "title": "Device Setup",
      "link": "/Device-Setup",
      "children": [
        {
          "title": "Gateway Setup",
          "link": "/Device-Setup/Gateway-Setup",
          "children": null
        },
        {
          "title": "Sensor Node Setup",
          "link": "/Device-Setup/Sensor-Node-Setup",
          "children": null
        },
        {
          "title": "Actuation Node Setup",
          "link": "/Device-Setup/Actuation-Node-Setup",
          "children": null
        }
      ]
    },
    {
      "title": "Log In",
      "link": "/Log-In",
      "children": null
    }
  ];

  constructor(private store: Store<null>,
              private router: Router) {
  }

  toggleSidebar() {
    this.store.dispatch(LayoutActions.toggleSidebar());
  }

}
