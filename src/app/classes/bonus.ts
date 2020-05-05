export type SourceValue = number | (() => number);

export class Bonus {
    source: string;
    _value: SourceValue;
    private isFunc: boolean;
    removable: boolean = false;

    constructor(name: string, value: SourceValue, bindTo?) {
        this.source = name;
        this.isFunc = this.isFunction(value);
        this._value = this.isFunc 
            ? (value as () => number).bind(bindTo)
            : value || 0;
    }

    get disabled() {
        return this.isFunc;
    }

    set value(i: number) {    
        if(this.disabled)
            return;

        this._value = i;
    }

    get value() {    
        if(this.isFunc){            
            let foo = (this._value as () => number);
            return foo();
        }

        return this._value as number;
    }

    isFunction(functionToCheck) {
        //https://stackoverflow.com/questions/5999998/check-if-a-variable-is-of-function-type
        return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }
}