'use strict'

import { expect } from 'chai'

import { add, sub, mul, div, per } from './index'

describe('add', () => {
  it('Should return a number', () => {
    expect(add(1, 2)).to.be.a('number')
  })

  it('Should add any two numbers', () => {
    for (let i = 0; i < 100; i++) {
      let a = Math.floor(Math.random() * 100)
      let b = Math.floor(Math.random() * 100)
      expect(add(a, b)).to.equal(a + b)
    }
  })

  it('Should be referentially transparent', () => {
    expect(add(5, 5)).to.equal(10)
    expect(10).to.equal(add(5, 5))
  })

  it('Should not mutate parameters', () => {
    let a = 5
    let b = 10

    add(a, b)

    expect(a).to.equal(5)
    expect(b).to.equal(10)
  })
})

describe('sub', () => {
  it('Should return a number', () => {
    expect(sub(1, 3)).to.be.a('number')
  })

  it('Should subtract any two numbers', () => {
    for (let i = 0; i < 100; i++) {
      let a = Math.floor(Math.random() * 100)
      let b = Math.floor(Math.random() * 100)
      expect(sub(a, b)).to.equal(a - b)
    }
  })

  it('Should be referentially transparent', () => {
    expect(sub(50, 20)).to.equal(30)
    expect(30).to.equal(sub(50, 20))
  })

  it('Should not mutate parameters', () => {
    let a = 5
    let b = 10

    sub(b, a)

    expect(a).to.equal(5)
    expect(b).to.equal(10)
  })
})

describe('mul', () => {
  it('Should return a number', () => {
    expect(mul(1, 3)).to.be.a('number')
  })

  it('Should multiply any two numbers correctly', () => {
    for (let i = 0; i < 100; i++) {
      let a = Math.floor(Math.random() * 100)
      let b = Math.floor(Math.random() * 100)
      expect(mul(a, b)).to.equal(a * b)
    }
  })

  it('Should be referentially transparent', () => {
    expect(mul(15, 2)).to.equal(30)
    expect(30).to.equal(mul(2, 15))
  })

  it('Should not mutate parameters', () => {
    let a = 5
    let b = 10

    mul(b, a)

    expect(a).to.equal(5)
    expect(b).to.equal(10)
  })
})

describe('div', () => {
  it('Should return a number', () => {
    expect(div(1, 3)).to.be.a('number')
  })

  it('Should divide any two numbers correctly', () => {
    for (let i = 0; i < 100; i++) {
      let a = Math.floor(Math.random() * 100)
      let b = Math.floor(Math.random() * 100)
      expect(div(a, b)).to.equal(a / b)
    }
  })

  it('Should be referentially transparent', () => {
    expect(div(50, 2)).to.equal(25)
    expect(25).to.equal(div(50, 2))
  })

  it('Should not mutate parameters', () => {
    let a = 5
    let b = 10

    div(b, a)

    expect(a).to.equal(5)
    expect(b).to.equal(10)
  })
})

describe('per', () => {
  it('Should return a number', () => {
    expect(per(50)).to.be.a('number')
  })

  it('Should return the correct percent for any number', () => {
    for (let i = 0; i < 100; i++) {
      let a = Math.floor(Math.random() * 1000)
      expect(per(a)).to.equal(a / 100)
    }
  })

  it('Should be referentially transparent', () => {
    expect(per(50)).to.equal(0.5)
    expect(0.5).to.equal(per(50))
  })

  it('Should not mutate parameters', () => {
    let a = 5
    per(a)
    expect(a).to.equal(5)
  })
})
