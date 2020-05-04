type SourceValue = number | (() => number);

export class Bonus {
    source: string;
    _value: SourceValue;
    private isFunc: boolean;

    constructor(value: SourceValue, bindTo?) {
        this.isFunc = this.isFunction(value);
        this._value = this.isFunc 
            ? (value as () => number).bind(bindTo)
            : value;
    }

    get disabled() {
        return this.isFunc;
    }

    set value(i: number) {
        if(this.disabled)
            return;

        this._value = this.value;
    }

    get value() {
        return this.isFunc ? (this.value as () => number)() : this._value;
    }

    isFunction(functionToCheck) {
        //https://stackoverflow.com/questions/5999998/check-if-a-variable-is-of-function-type
        return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }
}