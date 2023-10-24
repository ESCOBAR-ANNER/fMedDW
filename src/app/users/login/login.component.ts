import { Component } from '@angular/core';
import { userAuthService } from 'src/app/services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    user={
        email:'',
        password:''
    }

    constructor(
        private authService: userAuthService,
        private router: Router){}

    entrar(){
        this.authService.entrar(this.user)
        .subscribe(
            res => {
                console.log(res)
                localStorage.setItem('token', res.token);
                this.router.navigate([''])
            },
            err => console.log(err)
        )
    }

}
