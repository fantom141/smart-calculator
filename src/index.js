class SmartCalculator {

    constructor(initVal) {
        this.initVal = initVal;
        this.expression = [this.initVal];
    }

    add(number) {
        this.expression.push('+', number);
        return this;
    }

    subtract(number) {
        this.expression.push('-', number);
        return this;
    }

    multiply(number) {
        this.expression.push('*', number);
        return this;
    }

    devide(number) {
        this.expression.push('/', number);
        return this;
    }

    pow(number) {
        if (!this.expression[this.expression.length - 1].toString().includes('pow')) {
            this.expression[this.expression.length - 1] = `Math.pow(${this.expression[this.expression.length - 1]}, ${number})`;
            return this;
        } else {
            return this;
        }
    }

    valueOf() {
        return new Function('', `return ${this.expression.join('')}`)();
    }
}

module.exports = SmartCalculator;
