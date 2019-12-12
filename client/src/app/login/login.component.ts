import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor( private _auth: AuthService) {}

  loginUser(){
    //console.log(this.loginUserData)

    this._auth.loginUser(this.loginUserData)

    .subscribe(
      res=> console.log(res),
      err=> console.log(err)
    )
  }

  ngOnInit() {
  }

}
