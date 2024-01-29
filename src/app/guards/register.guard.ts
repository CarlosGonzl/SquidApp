import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanActivate {
  constructor(
    private storage: Storage, 
    private router: Router){}
  async canActivate(){
    const userRegisterIn = await this.storage.get('userRegisterIn');
    if(userRegisterIn){
      console.log(userRegisterIn);
      console.log('El usuario esta Registrado');
      return true;
    }else{
      console.log('El usuario no esta Registrado');
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
