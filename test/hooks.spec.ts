import { expect } from "chai";
import Calculator from "../src/calculator";

describe.only('hooks test', () => {
    let calc: Calculator;

    before(() => {
        console.log("1. before");
        calc = new Calculator();
    });

    beforeEach(() => {
        console.log("2. before each");
    });

    //nested test suite
    describe('add test suite', () => {
        it('should return sum', () => {
            //arrange
            
            //act
            const result = calc.add(2, 4);
            //assert
            expect(result).to.equal(6);
        });
    });

    //nested test suite
    describe('subtract test suite', () => {
        it('should return difference', () => {
            //arrange
    
            //act
            const result = calc.subtract(2, 4);
            //assert
            expect(result).to.equal(-2);
        });
    });

    afterEach(() => {
        console.log("3. after each");
    });
    
    after(() => {
        console.log("4. after");
    });

});