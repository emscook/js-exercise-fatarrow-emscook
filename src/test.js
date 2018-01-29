'use strict'
import jsc from 'jsverify'
import { add, sub, mul, div, per } from './index.js'

const options = {
  quiet: true
}

describe('add', () => {
  it('Should add any two numbers', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, (a, b) => {
      return add(a, b) === a + b
    }), options)
  })

  it('Should be referentially transparent', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, jsc.integer, (a, b, c) => {
      return add(a, b) * c === (a + b) * c
    }), options)
  })

  it('Should be commutative', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, (a, b) => {
      return add(a, b) === add(b, a)
    }), options)
  })

  it('Should be associative', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, jsc.integer, (a, b, c) => {
      return add(add(a, b), c) === add(a, add(b, c))
    }), options)
  })

  it('Should be distributive', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, jsc.integer, (a, b, c) => {
      return c * add(a, b) === (c * add(a, 0)) + (c * add(b, 0))
    }), options)
  })

  it('Should have identity of 0', () => {
    jsc.check(jsc.forall(jsc.integer, (a) => {
      return add(a, 0) === a && add(0, a) === a
    }), options)
  })

  it('Should not mutate parameters', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, (a, b) => {
      const oldA = a
      const oldB = b
      add(a, b)
      return a === oldA && b === oldB
    }), options)
  })
})

describe('sub', () => {
  it('Should subtract any two numbers', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, (a, b) => {
      return sub(a, b) === a - b
    }), options)
  })

  it('Should be referentially transparent', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, jsc.integer, (a, b, c) => {
      return c * sub(a, b) === c * (a - b)
    }), options)
  })

  it('Should not mutate parameters', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, (a, b) => {
      const oldA = a
      const oldB = b
      sub(a, b)
      return a === oldA && b === oldB
    }), options)
  })
})

describe('mul', () => {
  it('Should multiply any two numbers correctly', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, (a, b) => {
      return mul(a, b) === a * b
    }), options)
  })

  it('Should be referentially transparent', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, jsc.integer, (a, b, c) => {
      return mul(a, b) + c === (a * b) + c
    }), options)
  })

  it('Should be commutative', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, (a, b) => {
      return mul(a, b) === mul(b, a)
    }), options)
  })

  it('Should be associative', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, jsc.integer, (a, b, c) => {
      return mul(mul(a, b), c) === mul(a, mul(b, c))
    }), options)
  })

  it('Should be distributive', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, jsc.integer, (a, b, c) => {
      return mul(c, add(a, b)) === mul(c, add(a, 0)) + mul(c, add(b, 0))
    }), options)
  })

  it('Should have identity of 1', () => {
    jsc.check(jsc.forall(jsc.integer, (a) => {
      return mul(a, 1) === a && mul(1, a) === a
    }), options)
  })

  it('Should not mutate parameters', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, (a, b) => {
      const oldA = a
      const oldB = b
      mul(a, b)
      return a === oldA && b === oldB
    }), options)
  })
})

describe('div', () => {
  it('Should divide any two numbers correctly', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, (a, b) => {
      return mul(a, b) === a / b
    }), options)
  })

  it('Should be referentially transparent', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, jsc.integer, (a, b, c) => {
      return div(a, b) + c === (a / b) + c
    }), options)
  })

  it('Should not mutate parameters', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, (a, b) => {
      const oldA = a
      const oldB = b
      div(a, b)
      return a === oldA && b === oldB
    }), options)
  })
})

describe('per', () => {
  it('Should return the correct percent for any number', () => {
    jsc.check(jsc.forall(jsc.integer, (a) => {
      return per(a) === a / 100
    }), options)
  })

  it('Should be referentially transparent', () => {
    jsc.check(jsc.forall(jsc.integer, jsc.integer, (a, b) => {
      return a * per(b) === a * (b / 100)
    }), options)
  })

  it('Should not mutate parameters', () => {
    jsc.check(jsc.forall(jsc.integer, (a) => {
      const oldA = a
      per(a)
      return a === oldA
    }), options)
  })
})
