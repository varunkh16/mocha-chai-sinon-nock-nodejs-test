import { expect } from 'chai';
import Calculator from '../src/calculator';

describe('Test Calculator Class', () => {

    it('should return sum', () => {
        //arrange
        const calc = new Calculator();
        //act
        const result = calc.add(2, 4);
        //assert
        expect(result).to.equal(6);
    });

    it('should return difference', () => {
        //arrange
        const calc = new Calculator();
        //act
        const result = calc.subtract(2, 4);
        //assert
        expect(result).to.equal(-2);
    });

    it('should return product', () => {
        //arrange
        const calc = new Calculator();
        //act
        const result = calc.multiply(2, 4);
        //assert
        expect(result).to.equal(8);
    });

    it('should return quotient', () => {
        //arrange
        const calc = new Calculator();
        //act
        const result = calc.divide(2, 4);
        //assert
        expect(result).to.equal(0.5);
    });

    it('should throw error in quotient while divide by 0', () => {
        //arrange
        const calc = new Calculator();
        //act and assert
        expect(() => calc.divide(2, 0)).to.throw("Cannot multiply by zero");
    });
    
});