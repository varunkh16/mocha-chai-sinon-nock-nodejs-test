import { expect } from "chai";
import Calculator from "../src/calculator";

describe('ASYNC AWAIT test suite', () => {
    let calc: Calculator;

    beforeEach(() => {
        calc = new Calculator();
    });

    it('should work with async and await', async () => {
        //arrange

        //act
        const result = await calc.asyncFunctionPromise();

        //assert
        expect(result).to.equal(4);
    });

    it('should work by resolving promise', () => {
        //arrange

        //act
        calc.asyncFunctionPromise()
            .then((result) => {
                //assert
                expect(result).to.equal(4);
            });
    });

});