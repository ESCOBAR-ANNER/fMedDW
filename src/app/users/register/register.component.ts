import { Component } from '@angular/core';
import { userAuthService } from 'src/app/services/user-auth.service';
import {Router} from '@angular/router'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    user = {
        name:'',
        email: '',
        password: '',
    };

    constructor(
        private authService: userAuthService,
        private router: Router
        ){}

    register() {
        this.authService.loguin(this.user)
        .subscribe(
            res =>{
                console.log(res)
                localStorage.setItem('token',res.token);
                this.router.navigate([''])
            },
            err => console.log(err)
        )
    }
    
}
