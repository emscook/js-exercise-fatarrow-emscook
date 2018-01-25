'use strict'

import chai from 'chai'
import { add, sub, mul, div, per } from './index.js'

chai.should()

const id = (value) => value

describe('add', () => {
  it('Should return a number', () => {
    add(1, 2).should.be.a('number')
  })

  it('Should add any two numbers', () => {
    for (let i = 0; i < 100; i++) {
      let a = Math.floor(Math.random() * 100)
      let b = Math.floor(Math.random() * 100)
      add(a, b).should.equal(a + b)
    }
  })

  it('Should be referentially transparent', () => {
    add(5, 5).should.equal(10)
    id(10).should.equal(add(5, 5))
  })

  it('Should not mutate parameters', () => {
    let a = 5
    let b = 10

    add(a, b)

    a.should.equal(5)
    b.should.equal(10)
  })
})

describe('sub', () => {
  it('Should return a number', () => {
    sub(1, 3).should.be.a('number')
  })

  it('Should subtract any two numbers', () => {
    for (let i = 0; i < 100; i++) {
      let a = Math.floor(Math.random() * 100)
      let b = Math.floor(Math.random() * 100)
      sub(a, b).should.equal(a - b)
    }
  })

  it('Should be referentially transparent', () => {
    sub(50, 20).should.equal(30)
    id(30).should.equal(sub(50, 20))
  })

  it('Should not mutate parameters', () => {
    let a = 5
    let b = 10

    sub(b, a)

    a.should.equal(5)
    b.should.equal(10)
  })
})

describe('mul', () => {
  it('Should return a number', () => {
    mul(1, 3).should.be.a('number')
  })

  it('Should multiply any two numbers correctly', () => {
    for (let i = 0; i < 100; i++) {
      let a = Math.floor(Math.random() * 100)
      let b = Math.floor(Math.random() * 100)
      mul(a, b).should.equal(a * b)
    }
  })

  it('Should be referentially transparent', () => {
    mul(15, 2).should.equal(30)
    id(30).should.equal(mul(2, 15))
  })

  it('Should not mutate parameters', () => {
    let a = 5
    let b = 10

    mul(b, a)

    a.should.equal(5)
    b.should.equal(10)
  })
})

describe('div', () => {
  it('Should return a number', () => {
    div(1, 3).should.be.a('number')
  })

  it('Should divide any two numbers correctly', () => {
    for (let i = 0; i < 100; i++) {
      let a = Math.floor(Math.random() * 100)
      let b = Math.floor(Math.random() * 100)
      div(a, b).should.equal(a / b)
    }
  })

  it('Should be referentially transparent', () => {
    div(50, 2).should.equal(25)
    id(25).should.equal(div(50, 2))
  })

  it('Should not mutate parameters', () => {
    let a = 5
    let b = 10

    div(b, a)

    a.should.equal(5)
    b.should.equal(10)
  })
})

describe('per', () => {
  it('Should return a number', () => {
    per(50).should.be.a('number')
  })

  it('Should return the correct percent for any number', () => {
    for (let i = 0; i < 100; i++) {
      let a = Math.floor(Math.random() * 1000)
      per(a).should.equal(a / 100)
    }
  })

  it('Should be referentially transparent', () => {
    per(50).should.equal(0.5)
    id(0.5).should.equal(per(50))
  })

  it('Should not mutate parameters', () => {
    let a = 5

    per(a)

    a.should.equal(5)
  })
})
