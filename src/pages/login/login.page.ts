import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'page-login',
    templateUrl: 'login.page.html'
})
// ngrx:platform: login-page.component.ts
export class LoginPage {
    private readonly CLASS_NAME = 'LoginPage';

    public loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
    ) {
        console.log(`%s:constructor`, this.CLASS_NAME);
        this.createForm();
    }

    private createForm(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

  onLogin() {
    // this.submitted = true;
    console.log('this.loginForm.value>', this.loginForm.value);
    const formModel = this.loginForm.value;

    if (this.loginForm.dirty && this.loginForm.valid) {
      // this.authService.doLogin(formModel.username, formModel.password);
    }
  }    
}
