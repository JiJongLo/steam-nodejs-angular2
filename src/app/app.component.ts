/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
        <header class="header">
        <div class="top-bloc">
            <div class="logo"><img src="../assets/img/logo.png" alt=""></div>
            <div class="meny">
                <ul>
                    <li class="current"><a href="#1">Home</a></li>
                    <li><a href="#2">Get Started</a></li>
                    <li><a href="#3">How it works</a></li>
                    <li><a href="#4">Pricing</a></li>
                    <li><a href="#5">Support</a></li>
                </ul>
            </div>
            <div class="header-bottom">
                <ul>
                    <li class="login"><a href="#log">Login / Signup</a></li>
                    <li class="list"><a href="#list">Get Listed Today</a></li>
                </ul>
            </div>
        </div>
        <div class="text-header">
            <p>Find the <span>next event</span> you'll want <span>to attend.</span></p>
        </div>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>     
    </footer>
  `
})
export class App {
  name = 'Steam';
  url = '#';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
