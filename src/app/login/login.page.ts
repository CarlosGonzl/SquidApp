import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "El Email es obligatorio." },
      { type: "pattern", message: "El Email ingresado no es valido." }
    ],
    password: [
      { type: "required", message: "La constraseña es obligatoria." },
      { type: "password", message: "La contraseña ingresada es muy corta." }
    ]
  }
  loginMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private storage: Storage,
    private router: Router
    ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.compose([
        Validators.required, 
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]
      )
    ]
  ],
      password: ['', [Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]
      )
    ]
  ],
    });
   }


   onSubmit() {
    if (this.loginForm.valid) {
      
      console.log('Inicio de sesión válido:', this.loginForm.value);
    } else {
     
      console.log('Email o Contraseña incorrecta. Revise los campos.');
    }
  }

  ngOnInit() {
  }
  
  login(login_data: any){
    console.log(login_data);
    this.authService.loginUser(login_data).then(res => {
      this.loginMessage=res;
      this.storage.set('userLoggedIn', true);
      this.navCtrl.navigateForward('/menu/home');
    }).catch(err => {
      this.loginMessage = err;
    });
  }

  goToRegister(){
    console.log("go to register");
    this.router.navigateByUrl('/register');
    this.storage.set('mostreRegister', true);
  }
}
