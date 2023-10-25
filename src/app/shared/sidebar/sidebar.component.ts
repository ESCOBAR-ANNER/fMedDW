import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userAuthService } from 'src/app/services/user-auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private authService: userAuthService,
    private route: Router){}

  deleteToken(){
    if(this.authService.getToken() !==null){
      localStorage.removeItem('token')
      this.route.navigate(['/login'])
    }
  }

}
