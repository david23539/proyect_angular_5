import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'guardar-email',
  templateUrl: './guardar-email.component.html',
  styleUrls: ['./guardar-email.component.css']
})
export class GuardarEmailComponent implements OnInit, DoCheck {
  public title = "este es guardar email";
  public emailContacto: string = "";

  constructor() { }


  ngDoCheck(){

  //  this.emailContacto =  localStorage.getItem('emailContacto');
  }

  ngOnInit(){
    //this.emailContacto =  localStorage.getItem('emailContacto');
  }
  guardarEmail(){
    console.log(this.emailContacto);
    localStorage.setItem('emailContacto', this.emailContacto);
    console.log(localStorage.getItem('emailContacto'));
  }


}
