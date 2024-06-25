export class Validators {
    static required() {
        return {
            name: "required",
            handle: (input) => {
                return input != null && input != undefined && input != "";
            }
        }
    }

    static minLength(size) {
        return {
            name: "minLength",
            handle: (input) => {
                return input.length >= size;
            }
        }
    }

    static maxLength(size) {
        return {
            name: "maxLength",
            handle: (input) => {
                return input.length <= size;
            }
        }
    }

    static pattern(regex) {
        return {
            name: "pattern",
            handle: (input) => {
                if (typeof input != "string") return false;

                return regex.test(input)
            }
        }
    }

    static url(){
        return {
            name: 'url',
            handle: (input) => {
                if(typeof input != "string") return false;

                const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
                return regex.test(input)
            }
        }
    }

    static email() {
        return {
            name: "email",
            handle: (input) => {
                if (typeof input != "string") return false;

                const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                return regex.test(input);
            }
        }
    }
}

export class FormControl {
    constructor(prop = "", validators = []) {
        this.prop = prop;
        this.validators = validators;
        this.validations = new Map(validators.map(validator => [validator.name, true]))
        this.isValid = true;
    }

    validate() {
        this.isValid = true;
        this.validators.forEach(({ name, handle }) => {
            const handled = handle(this.prop);
            this.validations.set(name, handled);
            if(!handled) this.isValid = false;
        })
        return this.isValid;
    }

    validation(key){
        return this.validations.get(key);
    }

    invalid(){
        return !this.isValid;
    }
}

export class FormGroup {
    controls = new Map();
    constructor(data){
        this.isValid = false;
        Object.entries(data).forEach(([key, entry])=>{
            this.controls.set(key, entry);
        })
    }

    props(){
        const entries = Array
            .from(this.controls.entries())
            .map(([key, value]) => [key, value.prop])
        return Object.fromEntries(entries);
    }

    getControl(control){
        return this.controls.get(control);
    }

    validationControl(control, key){
        return this.getControl(control).validation(key);
    }

    invalidControl(control){
        return this.getControl(control).invalid();
    }

    validateControl(control){
        this.getControl(control).validate();
    }

    validateForm(){
        this.isValid = true;
        this.controls.forEach((value)=>{ 
            const valid = value.validate();
            if(!valid) this.isValid = false;
        })
    }

    isValidForm(){
        return this.isValid;
    }
}
