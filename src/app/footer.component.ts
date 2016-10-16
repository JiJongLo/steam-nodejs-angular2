/**
 * Created by B_i_p_y_C on 16.10.2016.
 */
import {Component} from "@angular/core";
@Component({
  selector: 'my-footer',
  styleUrls: ['./footer.style.css'],
  template: `
    <footer class="footer">
    <div class="footer-top">
      <ul>
        <li class="current1"><a href="#1">Home</a></li>
        <li><a href="#1">About eco</a></li>
        <li><a href="#1">How it works</a></li>
        <li><a href="#1">Industries</a></li>
        <li><a href="#1">Features</a></li>
        <li><a href="#1">Pricing</a></li>
        <li><a href="#1">Faq's</a></li>
        <li><a href="#1">Privacy policy</a></li>
        <li><a href="#1">Blog</a></li>
        <li><a href="#1">Terms of service</a></li>
      </ul>
    </div>
    <div class="footer-bottom">
      <p>© 2013 <span>steam.</span>  All Rights Reserved. Design by <span>woof.</span> </p>
      <div class="social-bloc">
        <ul>
          <li><a href=""><img src="../assets/img/icon5.png" alt=""></a></li>
          <li><a href=""><img src="../assets/img/icon4.png" alt=""></a></li>
          <li><a href=""><img src="../assets/img/yt.png" alt=""></a></li>
          <li><a href=""><img src="../assets/img/in.png" alt=""></a></li>
          <li><a href=""><img src="../assets/img/tw.png" alt=""></a></li>
          <li><a href=""><img src="../assets/img/fb.png" alt=""></a></li>
        </ul>
      </div>
    </div>
</footer>
    `
})
export class Footer {
}
