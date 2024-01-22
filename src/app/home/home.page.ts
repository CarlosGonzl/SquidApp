import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(
    private router: Router) 
    {}

  goToIntro(){
    console.log("go to intro");
    this.router.navigateByUrl('/intro');
  }
}
