import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public nombreUser: string;
  public emailUser: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth =>{
      if(auth){
        this.isLogin=true;
        this.nombreUser= auth.displayName;
        this.emailUser = auth.email;
      }else{
        this.isLogin=false;
      }
    })
  }

  onClickLogout(){
    this.authService.logout();
  }
}
