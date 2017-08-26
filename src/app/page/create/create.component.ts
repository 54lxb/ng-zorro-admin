import {
    Component,
    OnInit
} from '@angular/core';

import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';
import {Observable} from 'rxjs/Observable';


@Component({
    selector: 'nz-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {

    validateForm: FormGroup;


    constructor(private fb: FormBuilder) {
        this.validateForm = this.fb.group({
            projectName: ['', [Validators.required], [this.projectNameAsyncValidator]],
            patentName: ['', [Validators.required]],
            responder: ['', [Validators.required]],
            agent: ['', [Validators.required]],
            customer: ['', [Validators.required]],
            inventor: ['', [Validators.required]],
            createTime: ['', [Validators.required]],
            comment: ['']
        });
    }

    ngOnInit() {
    }


    submitForm = ($event, value) => {
        $event.preventDefault();
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsDirty();
        }
        console.log(value);
    };

    resetForm($event: MouseEvent) {
        $event.preventDefault();
        this.validateForm.reset();
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
        }
    }


    projectNameAsyncValidator = (control: FormControl): any => {
        return Observable.create(function (observer) {
            setTimeout(() => {
                if (control.value === 'JasonWood') {
                    observer.next({error: true, duplicated: true});
                } else {
                    observer.next(null);
                }
                observer.complete();
            }, 1000);
        });
    };

    getFormControl(name) {
        return this.validateForm.controls[name];
    }


    passwordConfirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return {required: true};
        } else if (control.value !== this.validateForm.controls['password'].value) {
            return {confirm: true, error: true};
        }
    };

    birthDayValidator = (control: FormControl): any => {
        if (new Date(control.value) > new Date()) {
            return {expired: true, error: true}
        }
    }

}
