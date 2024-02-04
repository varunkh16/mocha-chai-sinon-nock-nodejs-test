import { expect } from "chai";

describe('Assert style test case', () => {

    it('expect assert style', () => {
        //arrange
        const name: string = 'varun';
        const age: number = 33;
        const person: Object = { name: 'varun', age: 33 };
        const marks: Array<number> = [72, 45, 56, 82];
        const boolData: boolean = true;

        //act

        //assert
        expect(name).to.be.ok;
        expect(name).to.be.equal('varun');
        expect(name).to.be.not.equal('sharath');
        expect(name).to.be.a('string');

        expect(age).to.be.ok;
        expect(age).to.be.equal(33);
        expect(age).to.be.a('number');

        expect(person).to.be.ok;
        expect(person).to.be.a('object');
        expect(person).to.have.property('name').equal('varun');
        expect(person).to.have.property('age').equal(33);

        expect(marks).to.be.ok;
        expect(marks).to.be.a('array');
        expect(marks).to.have.length(4).that.include(45);

        expect(boolData).to.be.ok;
        expect(boolData).to.be.true;
        expect(boolData).to.be.a('boolean');
    });

});