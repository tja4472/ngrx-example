import {
    Component,
    // OnInit,
    Input,
    Output,
    EventEmitter,
    // ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Authenticate } from "../app/auth/models/user";

@Component({
    selector: 'tja-login-form',
    templateUrl: 'login-form.component.html'
})
// ngrx:platform: login-form.component.ts
export class LoginFormComponent {
    private readonly CLASS_NAME = 'LoginFormComponent';

    @Input()
    set pending(isPending: boolean) {
        if (isPending) {
            this.form.disable();
        }

        this.form.enable();
    }

    @Input() errorMessage: string | null;

    @Output() submitted = new EventEmitter<Authenticate>();

    public form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
    ) {
        console.log(`%s:constructor`, this.CLASS_NAME);
        this.createForm();
    }

    private createForm(): void {
        this.form = this.formBuilder.group({
            username: [''],
            password: [''],
        });
    }

    onLogin() {
        // this.submitted = true;
        console.log('this.loginForm.value>', this.form.value);
        /*        
                const formModel = this.form.value;
        
                if (this.form.dirty && this.form.valid) {
                    // this.authService.doLogin(formModel.username, formModel.password);
                }
        */
        if (this.form.valid) {
            this.submitted.emit(this.form.value);
        }
    }
}
