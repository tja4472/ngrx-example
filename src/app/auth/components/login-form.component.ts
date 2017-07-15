import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Authenticate } from '../models/user';

@Component({
    selector: 'bc-login-form',
    template: `
<ion-header>
  <ion-navbar>
    <button menuToggle ion-button icon-only>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Login</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
  <ion-list>
    <form [formGroup]="form" (ngSubmit)="submit()">
      <ion-item>
        <ion-label floating color="primary">Username</ion-label>
        <ion-input type="text" formControlName="username">
        </ion-input>
      </ion-item>  

      <ion-item>
        <ion-label floating color="primary">Password</ion-label>
        <ion-input type="password" formControlName="password">
        </ion-input>
      </ion-item> 

        <p *ngIf="errorMessage" class="loginError">
            {{ errorMessage }}
        </p>
          
      <ion-row responsive-sm>
        <ion-col>
          <button type="submit" ion-button color="primary" block>Login</button>
        </ion-col>
      </ion-row>
    </form>
  </ion-list>
</ion-content>

  `,
})
export class LoginFormComponent implements OnInit {
    @Input()
    set pending(isPending: boolean) {
        if (isPending) {
            this.form.disable();
        }

        this.form.enable();
    }

    @Input() errorMessage: string | null;

    @Output() submitted = new EventEmitter<Authenticate>();

    form: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });

    constructor() { }

    ngOnInit() { }

    submit() {
        if (this.form.valid) {
            this.submitted.emit(this.form.value);
        }
    }
}
