import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',*/
  template : `
  <main>
</main>
<router-outlet></router-outlet>
<!--Footer-->
<footer class="page-footer blue center-on-small-only fixed-bottom">
    <div class="footer-copyright">
        <div class="container-fluid">
            © 2017 Copyright:<a href="https://github.com/LiviaLink/school_information_system.git"> Umeaduma Livinus</a>
        </div>
    </div>
</footer>` ,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
