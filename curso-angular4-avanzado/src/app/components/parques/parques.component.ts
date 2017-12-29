import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy} from '@angular/core';
import { fundido} from "../animations";

@Component({
  selector: 'parques',
  templateUrl: './parques.component.html',
  animations: [fundido]
})
export class ParquesComponent implements OnChanges, OnInit, OnDestroy{


  @Input() nombre: string;
  @Input ('metros_cuadrados') metros: number;
  public vegetacion: string;
  public abierto: boolean;
  @Output() pasameLosDatos = new EventEmitter();
  public title = "este es el parque";

  constructor() {
    this.nombre = "Parque natural para caballos";
    this.metros = 450;
    this.vegetacion = "alta";
    this.abierto = true;
  }

  ngOnDestroy(){
    console.log("se ha ejecutado el detroy");
  }

  ngOnInit(){
    console.log("metodo on init lanzado");
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
    console.log("Existen cambios");
  }


  emitirEvento() {
    this.pasameLosDatos.emit({
      "nombre" : "Parque natural para caballos",
      "metros" : 450,
      "vegetacion" : "alta",
      "abierto" : true
    })
  }
}
