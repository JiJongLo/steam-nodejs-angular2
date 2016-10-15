import {Component} from "@angular/core";
@Component({
  selector: 'my-header',
  styleUrls: ['./header.style.css'],
  template: `
    <header class="header">
        <div class="top-bloc">
            <div class="logo"><img src="../assets/img/logo.png" alt=""></div>
            <div class="meny">
                <ul>
                    <li class="current"><a [routerLink]= "['./']">Home</a></li>
                    <li><a [routerLink]=" ['./started']" >Get Started</a></li>
                    <li><a [routerLink]=" ['./worked']">How it works</a></li>
                    <li><a [routerLink]=" ['./pricing']">Pricing</a></li>
                    <li><a [routerLink]=" ['./support']">Support</a></li>
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
    `
})
export class Header {

}
