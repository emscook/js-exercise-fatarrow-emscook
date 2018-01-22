'use strict';

var _chai = require('chai');

var _index = require('./index');

describe('add', () => {
  it('Should return a number', () => {
    (0, _chai.expect)((0, _index.add)(1, 2)).to.be.a('number');
  });

  it('Should add any two numbers', () => {
    for (let i = 0; i < 100; i++) {
      let a = Math.floor(Math.random() * 100);
      let b = Math.floor(Math.random() * 100);
      (0, _chai.expect)((0, _index.add)(a, b)).to.equal(a + b);
    }
  });

  it('Should be referentially transparent', () => {
    (0, _chai.expect)((0, _index.add)(5, 5)).to.equal(10);
    (0, _chai.expect)(10).to.equal((0, _index.add)(5, 5));
  });

  it('Should not mutate parameters', () => {
    let a = 5;
    let b = 10;

    (0, _index.add)(a, b);

    (0, _chai.expect)(a).to.equal(5);
    (0, _chai.expect)(b).to.equal(10);
  });
});

describe('sub', () => {
  it('Should return a number', () => {
    (0, _chai.expect)((0, _index.sub)(1, 3)).to.be.a('number');
  });

  it('Should subtract any two numbers', () => {
    for (let i = 0; i < 100; i++) {
      let a = Math.floor(Math.random() * 100);
      let b = Math.floor(Math.random() * 100);
      (0, _chai.expect)((0, _index.sub)(a, b)).to.equal(a - b);
    }
  });

  it('Should be referentially transparent', () => {
    (0, _chai.expect)((0, _index.sub)(50, 20)).to.equal(30);
    (0, _chai.expect)(30).to.equal((0, _index.sub)(50, 20));
  });

  it('Should not mutate parameters', () => {
    let a = 5;
    let b = 10;

    (0, _index.sub)(b, a);

    (0, _chai.expect)(a).to.equal(5);
    (0, _chai.expect)(b).to.equal(10);
  });
});

describe('mul', () => {
  it('Should return a number', () => {
    (0, _chai.expect)((0, _index.mul)(1, 3)).to.be.a('number');
  });

  it('Should multiply any two numbers correctly', () => {
    for (let i = 0; i < 100; i++) {
      let a = Math.floor(Math.random() * 100);
      let b = Math.floor(Math.random() * 100);
      (0, _chai.expect)((0, _index.mul)(a, b)).to.equal(a * b);
    }
  });

  it('Should be referentially transparent', () => {
    (0, _chai.expect)((0, _index.mul)(15, 2)).to.equal(30);
    (0, _chai.expect)(30).to.equal((0, _index.mul)(2, 15));
  });

  it('Should not mutate parameters', () => {
    let a = 5;
    let b = 10;

    (0, _index.mul)(b, a);

    (0, _chai.expect)(a).to.equal(5);
    (0, _chai.expect)(b).to.equal(10);
  });
});

describe('div', () => {
  it('Should return a number', () => {
    (0, _chai.expect)((0, _index.div)(1, 3)).to.be.a('number');
  });

  it('Should divide any two numbers correctly', () => {
    for (let i = 0; i < 100; i++) {
      let a = Math.floor(Math.random() * 100);
      let b = Math.floor(Math.random() * 100);
      (0, _chai.expect)((0, _index.div)(a, b)).to.equal(a / b);
    }
  });

  it('Should be referentially transparent', () => {
    (0, _chai.expect)((0, _index.div)(50, 2)).to.equal(25);
    (0, _chai.expect)(25).to.equal((0, _index.div)(50, 2));
  });

  it('Should not mutate parameters', () => {
    let a = 5;
    let b = 10;

    (0, _index.div)(b, a);

    (0, _chai.expect)(a).to.equal(5);
    (0, _chai.expect)(b).to.equal(10);
  });
});

describe('per', () => {
  it('Should return a number', () => {
    (0, _chai.expect)((0, _index.per)(50)).to.be.a('number');
  });

  it('Should return the correct percent for any number', () => {
    for (let i = 0; i < 100; i++) {
      let a = Math.floor(Math.random() * 1000);
      (0, _chai.expect)((0, _index.per)(a)).to.equal(a / 100);
    }
  });

  it('Should be referentially transparent', () => {
    (0, _chai.expect)((0, _index.per)(50)).to.equal(0.5);
    (0, _chai.expect)(0.5).to.equal((0, _index.per)(50));
  });

  it('Should not mutate parameters', () => {
    let a = 5;
    (0, _index.per)(a);
    (0, _chai.expect)(a).to.equal(5);
  });
});