import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Authenticate } from "../../app/auth/models/user";

@Component({
    selector: 'page-login',
    templateUrl: 'login.page.html'
})
// ngrx:platform: login-page.component.ts
export class LoginPage {
    private readonly CLASS_NAME = 'LoginPage';

  // pending$ = this.store.select(fromAuth.getLoginPagePending);
  // error$ = this.store.select(fromAuth.getLoginPageError);

    constructor() {
        console.log(`%s:constructor`, this.CLASS_NAME);
    }

      onSubmit($event: Authenticate) {
    // this.store.dispatch(new Auth.Login($event));
  }   
}
