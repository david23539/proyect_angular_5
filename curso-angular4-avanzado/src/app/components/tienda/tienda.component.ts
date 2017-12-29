import { Component, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate} from "@angular/animations";
import {fundido} from "../animations";

@Component(
  {
    selector: "tienda",
    templateUrl: "tienda.component.html",
    styleUrls: ["tienda.component.css"],
    animations: [
      trigger('marcar', [
        state('inactive',style({
          'border': '5px solid #ccc'
        })),
        state('active', style({
          'border': '5px solid yellow',
          'background': 'red',
          'border-radius': '50px',
          'transform': 'scale(1.2)'
        })),
        transition('inactive => active', animate('3s linear')),
        transition('active => inactive', animate('3s linear'))
      ]),
      fundido
    ]
  }
)
export class TiendaComponent implements OnInit{

  public titulo;
  public nombreDelParque: string;
  public miParque;
  public state;
  public textoTransicion:string;

  constructor (){
    this.titulo = "esta es la tienda";
    this.nombreDelParque = "";
    this.state = 'active';
    this.textoTransicion = "Activo"
  }

  ngOnInit(){
    $('#textojq').hide();
    $('#botonjq').click(function () {
      console.log("holaa");
      $('#textojq').slideToggle();
    })
    $('#caja').dotdotdot();

  }


  textoRichEditor(content){
    console.log(content);
  }

  mostrarNombre(){
    console.log(this.nombreDelParque);
  }
  verDatosParques(event){
    console.log(event);
    this.miParque = event;
    console.log(this.miParque);
  }


  cambiarEstado(){
    if(this.state == 'active'){
      this.state='inactive';
      this.textoTransicion = "Inactivo"
    }else{
      this.state='active';
      this.textoTransicion = "Activo"
    }

  }
}
