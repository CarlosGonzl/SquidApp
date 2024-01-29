import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, ValidatorFn, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup; 
  validation_messages = {
    email: [
      { type: "required", message: "El Email es obligatorio." },
      { type: "pattern", message: "El Email ingresado no es valido." }
    ],
    password: [
      { type: "required", message: "La constraseña es obligatoria." },
      { type: "password", message: "La contraseña ingresada es muy corta." }
    ],
    confirmation_password: [
      { type: "required", message: "La confirmación de contraseña es obligatoria." },
      { type: "password", message: "La contraseña ingresada es muy corta." }
    ],
    name: [
      { type: "required", message: "El nombre es obligatorio." },
    ],
    last_name: [
      { type: "required", message: "El apellido es obligatori0." },
    ]
  }
  registerinMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private router: Router
  ) { 
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      ), 
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ),
      confirmation_password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          this.matchPassword('password')
        ])
      ),
      
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      )
    })
    }

    private matchPassword(matchControl: string): ValidatorFn {
      return (control: AbstractControl): { [key: string]: any } | null => {
        const matchValue = control.value;
        const originalControl = control.root.get(matchControl);
  
        if (originalControl && matchValue !== originalControl.value) {
          return { 'passwordMismatch': true };
        }
  
        return null;
      };
    }

  ngOnInit() {
  }

  register(register_data: any){
    console.log(register_data);
      this.storage.set('userRegisterIn', true);
      this.navCtrl.navigateForward('/home');
    
  }

  goToLogin(){
    console.log("go to Login");
    this.router.navigateByUrl('/login');
    this.storage.set('RegreseLogin', true);
  }

}

