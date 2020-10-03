import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {LoginService} from '../../core/login/login.service';
import {User} from '../../core/user/user.model';
import {TranslateService} from '@ngx-translate/core';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    loginForm = this.fb.group({
        username: [''],
        password: [''],
        rememberMe: [false]
    });

    constructor(private router: Router,
                private fb: FormBuilder,
                private toastr: ToastController,
                private translate: TranslateService,
                private loginService: LoginService) {
    }

    ngOnInit() {
    }

    // TODO social login
    // signInWithFB(): void {
    //     this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    // }
    //
    // signInWithGoogle(){
    //     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // }

    Login() {
        this.loginService
            .login({
                username: this.loginForm.get('username').value,
                password: this.loginForm.get('password').value,
            })
            .subscribe(
                (user: User) => {
                    if (user) {
                        this.router.navigateByUrl('create-request');
                    } else {
                        this.translate.get('error').subscribe(message => {
                            this.showErrorToast(message);
                        });
                    }
                },
                (error) => {
                    if (error && error.status === 401) {
                        this.translate.get('emailPassError').subscribe(message => {
                            this.showErrorToast(message);

                        });
                    } else {
                        this.translate.get('error').subscribe(message => {
                            this.showErrorToast(message);
                        });
                    }
                });
    }

    async showErrorToast(message) {
        const toast = await this.toastr.create({message, color: 'danger', duration: 5000});
        toast.present();
    }

    goSignup() {
        this.router.navigateByUrl('signup');
    }

    goForgetPassword() {
        this.router.navigateByUrl('forgotpassword');
    }

}
