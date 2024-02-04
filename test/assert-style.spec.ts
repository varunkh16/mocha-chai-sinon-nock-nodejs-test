import { expect, should, assert } from "chai";

describe('Assert style test case', () => {

    it('EXPECT assertion style', () => {
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

    it('SHOULD assertion style', () => {
        should();
        //arrange
        const name: string = 'varun';
        const age: number = 33;
        const person: Object = { name: 'varun', age: 33 };
        const marks: Array<number> = [72, 45, 56, 82];
        const boolData: boolean = true;

        //act

        //should
        name.should.be.ok;
        name.should.be.equal('varun');
        name.should.be.not.equal('sharath');
        name.should.be.a('string');

        age.should.be.ok;
        age.should.be.equal(33);
        age.should.be.a('number');

        person.should.be.ok;
        person.should.be.a('object');
        person.should.have.property('name').equal('varun');
        person.should.have.property('age').equal(33);

        marks.should.be.ok;
        marks.should.be.a('array');
        marks.should.have.length(4).that.include(45);

        boolData.should.be.ok;
        boolData.should.be.true;
        boolData.should.be.a('boolean');
    });

    it('ASSERT assertion style', () => {
        //arrange
        const name: string = 'varun';
        const age: number = 33;
        const person: Object = { name: 'varun', age: 33 };
        const marks: Array<number> = [72, 45, 56, 82];
        const boolData: boolean = true;

        //act

        //should
        assert.isOk(name);
        assert.equal(name, 'varun');
        assert.notEqual(name, 'sharath');
        assert.typeOf(name, 'string');

        assert.isOk(age);
        assert.equal(age, 33);
        assert.typeOf(age, 'number');

        assert.isOk(person);
        assert.typeOf(person, 'object');
        assert.deepEqual(person, { name: 'varun', age: 33 });

        assert.isOk(marks);
        assert.typeOf(marks, 'array');
        assert.deepEqual(marks, [72, 45, 56, 82]);
        assert.include(marks, 45);

        assert.isOk(boolData);
        assert.isTrue(boolData);
        assert.typeOf(boolData, 'boolean');
    });

});