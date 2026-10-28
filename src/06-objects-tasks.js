function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.getArea = function getArea() {
  return this.width * this.height;
};

function sortObjectKeys(value) {
  if (Array.isArray(value)) {
    return value.map((item) => sortObjectKeys(item));
  }

  if (value !== null && typeof value === 'object') {
    const result = {};

    Object.keys(value).sort().forEach((key) => {
      result[key] = sortObjectKeys(value[key]);
    });

    return result;
  }

  return value;
}
function getJSON(obj) {
  return JSON.stringify(sortObjectKeys(obj));
}

function fromJSON(proto, json) {
  return Object.assign(Object.create(proto), JSON.parse(json));
}

const selectorPartOrder = {
  element: 0,
  id: 1,
  class: 2,
  attribute: 3,
  pseudoClass: 4,
  pseudoElement: 5,
};

const duplicatePartError = 'Element, id and pseudo-element should not occur more then one time inside the selector';

const orderError = 'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element';

function Selector(parts) {
  this.parts = parts || [];
}

Selector.prototype.add = function add(type, value) {
  const uniqueTypes = ['element', 'id', 'pseudoElement'];

  if (
    uniqueTypes.indexOf(type) !== -1
    && this.parts.some((part) => part.type === type)
  ) {
    throw new Error(duplicatePartError);
  }

  const previousPart = this.parts[this.parts.length - 1];

  if (
    previousPart
    && selectorPartOrder[type] < selectorPartOrder[previousPart.type]
  ) {
    throw new Error(orderError);
  }

  return new Selector(this.parts.concat([{ type, value }]));
};

Selector.prototype.element = function element(value) {
  return this.add('element', value);
};

Selector.prototype.id = function id(value) {
  return this.add('id', value);
};

Selector.prototype.class = function addClass(value) {
  return this.add('class', value);
};

Selector.prototype.attr = function attr(value) {
  return this.add('attribute', value);
};

Selector.prototype.pseudoClass = function pseudoClass(value) {
  return this.add('pseudoClass', value);
};

Selector.prototype.pseudoElement = function pseudoElement(value) {
  return this.add('pseudoElement', value);
};

function stringifyPart(part) {
  if (part.type === 'element') {
    return part.value;
  }

  if (part.type === 'id') {
    return `#${part.value}`;
  }

  if (part.type === 'class') {
    return `.${part.value}`;
  }

  if (part.type === 'attribute') {
    return `[${part.value}]`;
  }

  if (part.type === 'pseudoClass') {
    return `:${part.value}`;
  }

  if (part.type === 'pseudoElement') {
    return `::${part.value}`;
  }

  return '';
}

Selector.prototype.stringify = function stringify() {
  return this.parts.map((part) => stringifyPart(part)).join('');
};

function CombinedSelector(selector1, combinator, selector2) {
  this.selector1 = selector1;
  this.combinator = combinator;
  this.selector2 = selector2;
}

CombinedSelector.prototype.stringify = function stringify() {
  return `${this.selector1.stringify()} ${this.combinator} ${this.selector2.stringify()}`;
};

const cssSelectorBuilder = {
  element(value) {
    return new Selector().element(value);
  },

  id(value) {
    return new Selector().id(value);
  },

  class(value) {
    return new Selector().class(value);
  },

  attr(value) {
    return new Selector().attr(value);
  },

  pseudoClass(value) {
    return new Selector().pseudoClass(value);
  },

  pseudoElement(value) {
    return new Selector().pseudoElement(value);
  },

  combine(selector1, combinator, selector2) {
    const validCombinators = [' ', '+', '~', '>'];

    if (validCombinators.indexOf(combinator) === -1) {
      throw new Error('Invalid CSS selector combinator');
    }

    return new CombinedSelector(selector1, combinator, selector2);
  },
};

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
