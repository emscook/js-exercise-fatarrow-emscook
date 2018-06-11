'use strict';

var _jsverify = require('jsverify');

var _jsverify2 = _interopRequireDefault(_jsverify);

var _index = require('./index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const options = {
  quiet: true
};

describe('add', () => {
  it('Should add any two numbers', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, (a, b) => {
      return (0, _index.add)(a, b) === a + b;
    }), options);
  });

  it('Should be referentially transparent', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, _jsverify2.default.integer, (a, b, c) => {
      return (0, _index.add)(a, b) * c === (a + b) * c;
    }), options);
  });

  it('Should be commutative', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, (a, b) => {
      return (0, _index.add)(a, b) === (0, _index.add)(b, a);
    }), options);
  });

  it('Should be associative', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, _jsverify2.default.integer, (a, b, c) => {
      return (0, _index.add)((0, _index.add)(a, b), c) === (0, _index.add)(a, (0, _index.add)(b, c));
    }), options);
  });

  it('Should be distributive', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, _jsverify2.default.integer, (a, b, c) => {
      return c * (0, _index.add)(a, b) === c * (0, _index.add)(a, 0) + c * (0, _index.add)(b, 0);
    }), options);
  });

  it('Should have identity of 0', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, a => {
      return (0, _index.add)(a, 0) === a && (0, _index.add)(0, a) === a;
    }), options);
  });

  it('Should not mutate parameters', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, (a, b) => {
      const oldA = a;
      const oldB = b;
      (0, _index.add)(a, b);
      return a === oldA && b === oldB;
    }), options);
  });
});

describe('sub', () => {
  it('Should subtract any two numbers', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, (a, b) => {
      return (0, _index.sub)(a, b) === a - b;
    }), options);
  });

  it('Should be referentially transparent', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, _jsverify2.default.integer, (a, b, c) => {
      return c * (0, _index.sub)(a, b) === c * (a - b);
    }), options);
  });

  it('Should not mutate parameters', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, (a, b) => {
      const oldA = a;
      const oldB = b;
      (0, _index.sub)(a, b);
      return a === oldA && b === oldB;
    }), options);
  });
});

describe('mul', () => {
  it('Should multiply any two numbers correctly', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, (a, b) => {
      return (0, _index.mul)(a, b) === a * b;
    }), options);
  });

  it('Should be referentially transparent', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, _jsverify2.default.integer, (a, b, c) => {
      return (0, _index.mul)(a, b) + c === a * b + c;
    }), options);
  });

  it('Should be commutative', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, (a, b) => {
      return (0, _index.mul)(a, b) === (0, _index.mul)(b, a);
    }), options);
  });

  it('Should be associative', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, _jsverify2.default.integer, (a, b, c) => {
      return (0, _index.mul)((0, _index.mul)(a, b), c) === (0, _index.mul)(a, (0, _index.mul)(b, c));
    }), options);
  });

  it('Should be distributive', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, _jsverify2.default.integer, (a, b, c) => {
      return (0, _index.mul)(c, (0, _index.add)(a, b)) === (0, _index.mul)(c, (0, _index.add)(a, 0)) + (0, _index.mul)(c, (0, _index.add)(b, 0));
    }), options);
  });

  it('Should have identity of 1', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, a => {
      return (0, _index.mul)(a, 1) === a && (0, _index.mul)(1, a) === a;
    }), options);
  });

  it('Should not mutate parameters', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, (a, b) => {
      const oldA = a;
      const oldB = b;
      (0, _index.mul)(a, b);
      return a === oldA && b === oldB;
    }), options);
  });
});

describe('div', () => {
  it('Should divide any two numbers correctly', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, (a, b) => {
      return (0, _index.mul)(a, b) === a / b;
    }), options);
  });

  it('Should be referentially transparent', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, _jsverify2.default.integer, (a, b, c) => {
      return (0, _index.div)(a, b) + c === a / b + c;
    }), options);
  });

  it('Should not mutate parameters', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, (a, b) => {
      const oldA = a;
      const oldB = b;
      (0, _index.div)(a, b);
      return a === oldA && b === oldB;
    }), options);
  });
});

describe('per', () => {
  it('Should return the correct percent for any number', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, a => {
      return (0, _index.per)(a) === a / 100;
    }), options);
  });

  it('Should be referentially transparent', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, _jsverify2.default.integer, (a, b) => {
      return a * (0, _index.per)(b) === a * (b / 100);
    }), options);
  });

  it('Should not mutate parameters', () => {
    _jsverify2.default.check(_jsverify2.default.forall(_jsverify2.default.integer, a => {
      const oldA = a;
      (0, _index.per)(a);
      return a === oldA;
    }), options);
  });
});