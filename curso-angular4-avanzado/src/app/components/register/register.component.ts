import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    public title = "Registro";
  constructor(private  _route: ActivatedRoute, private_router: Router) { }

  ngOnInit() {
  }

}
