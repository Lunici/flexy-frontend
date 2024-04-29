import {FormGroup} from "@angular/forms";

export abstract class FormPage {
    private _formGroup: FormGroup | undefined;

    private _isLoading: boolean = false;

    get formGroup(): FormGroup {
        return <FormGroup>this._formGroup;
    }

    set formGroup(value: FormGroup) {
        this._formGroup = value;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    set isLoading(value: boolean) {
        this._isLoading = value;
    }

    protected constructor() {
        this.formGroup = this.initFormGroup();
    }

    abstract initFormGroup(): FormGroup;

    protected enableForm(): void {
        this.formGroup.enable();
        this.isLoading = false;
    }

    protected disableForm(): void {
        this.formGroup.disable()
        this.isLoading = true;
    }
    protected isInvalidForm(): boolean {
        return this.formGroup.invalid;
    }

}