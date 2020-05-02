import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobSerService } from './glob-ser.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private router:Router, public globalVar : GlobSerService){}
    input(){
      this.router.navigate(['input-page']);
    }

    list(){
      this.router.navigate(['list-page']);
    }

    edit(){
      this.router.navigate(['edit-page']);
    }
}
