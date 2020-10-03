import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {AccountService} from '../../core/auth/account.service';
import {EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE} from '../../app.constants';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../../core/user/user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

    doNotMatch = false;
    error = false;
    errorEmailExists = false;
    errorUserExists = false;
    success = false;
    helperError = false;


    registerForm = this.fb.group({
        email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
        isHelper: [true],
        isHelpSeeker: [false]
    });

    constructor(private router: Router,
                private fb: FormBuilder,
                private accountService: AccountService) {
    }

    ngOnInit() {
    }


    register(): void {
        this.doNotMatch = false;
        this.error = false;
        this.errorEmailExists = false;
        this.errorUserExists = false;
        this.helperError = false;

        const isHelper = this.registerForm.get(['isHelper'])!.value;
        const isHelpSeeker = this.registerForm.get(['isHelpSeeker'])!.value;
        if (!isHelper && !isHelpSeeker) {
            this.helperError = true;
        } else {
            const password = this.registerForm.get(['password'])!.value;
            if (password !== this.registerForm.get(['confirmPassword'])!.value) {
                this.doNotMatch = true;
            } else {

                const user = {
                    ...new User(),
                    login: this.registerForm.get(['email'])!.value,
                    email: this.registerForm.get(['email'])!.value,
                    password: this.registerForm.get(['password'])!.value,
                    isHelper: this.registerForm.get(['isHelper'])!.value,
                    isHelpSeeker: this.registerForm.get(['isHelpSeeker'])!.value,
                    langKey: 'en'
                };

                this.accountService.register(user).subscribe(
                    () => {
                        // TODO create new page for email verification / phone verification
                        this.success = true;

                    },
                    response => this.processError(response)
                );
            }
        }


    }

    private processError(response: HttpErrorResponse): void {
        console.log(response);
        if (response.status === 400 && response.error.type === LOGIN_ALREADY_USED_TYPE) {
            this.errorEmailExists = true;
        } else if (response.status === 400 && response.error.type === EMAIL_ALREADY_USED_TYPE) {
            this.errorEmailExists = true;
        } else {
            this.error = true;
        }
    }

    goLogin() {
        this.router.navigateByUrl('login');
    }

}
