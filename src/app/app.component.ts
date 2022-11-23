import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.breakpointObserver
    .observe(['(orientation: landscape)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.columns = 2
      } else {
        this.columns = 1
      }
    });
  }

  constructor (public breakpointObserver: BreakpointObserver) {}
  private mediaQueryList! : MediaQueryList
  columns = 2
  title = 'school-project';
}
