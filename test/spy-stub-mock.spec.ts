import { expect } from "chai";
import Calculator from "../src/calculator";
import Sinon, { SinonMock, SinonSpy, SinonStub } from "sinon";

describe('spy stub mock test', () => {
    let calc: Calculator;
    let spy: SinonSpy;
    let stub: SinonStub;
    let mock: SinonMock;

    before(() => {
        console.log("1. before");
        calc = new Calculator();
    });

    beforeEach(() => {
        console.log("2. before each");
        mock = Sinon.mock(calc);
    });

    //nested test suite
    describe('add test suite', () => {
        it('should return sum', () => {
            //arrange
            spy = Sinon.spy(calc, 'add');
            stub = Sinon.stub(calc, 'getRandomValue').returns(2);
            let expectation = mock.expects('logMessage').exactly(1).withArgs("adding two numbers");

            //act
            const result = calc.add(2, 4);

            //assert
            expect(result).to.equal(8);
            expect(spy.calledOnceWith(2, 4)).to.be.true;
            expectation.verify();
        });
    });

    //nested test suite
    describe('subtract test suite', () => {
        it('should return difference', () => {
            //arrange
            spy = Sinon.spy(calc, 'subtract');
            let expectation = mock.expects('logMessage').exactly(1).withArgs("subtracting two numbers");

            //act
            const result = calc.subtract(2, 4);
            
            //assert
            expect(result).to.equal(-2);
            expect(spy.calledOnceWith(2, 4)).to.be.true;
            expectation.verify();
        });
    });

    afterEach(() => {
        console.log("3. after each");
        if (spy) spy.restore();
        if (stub) stub.restore();
        if (mock) mock.restore();
    });

    after(() => {
        console.log("4. after");
    });

});