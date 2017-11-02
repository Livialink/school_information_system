import { Component } from '@angular/core';
import { fadeAnimation } from './core/animations/fade.animation';
import { slideAnimation} from './core/animations/slide.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [slideAnimation]
})
export class AppComponent {
  title = 'app';
  navactive = false;
  constructor(){}
  
  public getRouteAnimation(outlet){//getRouterOutletState(outlet) {
    return outlet.activatedRouteData.animation;//outlet.isActivated ? outlet.activatedRoute : '';
  }

  toggleClass(){
    this.navactive = !this.navactive;
  }
}
