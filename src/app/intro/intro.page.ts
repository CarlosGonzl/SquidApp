import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

   slides= [
    {
      title: "<b>JUANES BOGOTÁ<br>SEGUNDA FECHA</b>",
      description: "El parcero de Colombia recorrerá su país en una gira nacional por cinco ciudades.",
      image: "../../assets/images/juanes.webp",
      help_text: "<b>Lugar:</b> Movistar Arena <br><b>Ciudad:</b> Bogotá<br><b>Fecha:</b> 2024-05-23<br><b>Hora:</b> 8:00PM<br><b>Edad minima:</b> 7 años<br><b>Apertura puertas:</b> 6:00PM<br><b>Dirección:</b> Dg. 61c #26-36",
      class: "slide-1",
    
    },
    {
      title: "<b>QUEVEDO<br>LATINOAMERIA DQE TOUR</b>",
      description:"",
      image: "../../assets/images/QUEVEDO.webp",
      help_text: "<b>Lugar:</b> Movistar Arena <br><b>Ciudad:</b> Bogotá<br><b>Fecha:</b> 2024-01-20<br><b>Hora:</b> 9:00PM<br><b>Edad minima:</b> 7 años<br><b>Apertura puertas:</b> 7:00PM<br><b>Dirección:</b> Dg. 61c #26-36",
      class: "slide-2",
    },
    {
      title: "<b>ANDRES LOPEZ<br>LA PELOTA DE LETRAS</b>",
      description:"La Pelota de Letras que ha rodado por más de 15 países está celebrando sus 20 años, y llega con todas las particularidades de nuestras generaciones a Bogotá.",
      image: "../../assets/images/ANDRES.webp",
      help_text: "<b>Lugar:</b> Teatro Cafam <br><b>Ciudad:</b> Bogotá<br><b>Fecha:</b> 2024-01-26<br><b>Edad minima:</b> 14 años<br><b>Dirección:</b> Dg. 61c #26-36",
      class: "slide-3",
    },
   

  ]
 
  constructor(
    private router: Router) 
    {}

  goToIntro(){
    console.log("go to home");
    this.router.navigateByUrl('/home');
  }



}
