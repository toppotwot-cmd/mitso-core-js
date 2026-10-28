function getFizzBuzz(num) {
  if (num % 15 === 0) {
    return 'FizzBuzz';
  }

  if (num % 3 === 0) {
    return 'Fizz';
  }

  if (num % 5 === 0) {
    return 'Buzz';
  }

  return num;
}

function getFactorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }

  return result;
}

function getSumBetweenNumbers(n1, n2) {
  const start = Math.min(n1, n2);
  const end = Math.max(n1, n2);
  let sum = 0;

  for (let value = start; value <= end; value += 1) {
    sum += value;
  }

  return sum;
}

function isTriangle(a, b, c) {
  return a > 0 && b > 0 && c > 0
    && a + b > c
    && a + c > b
    && b + c > a;
}

function doRectanglesOverlap(rect1, rect2) {
  return rect1.left < rect2.left + rect2.width
    && rect1.left + rect1.width > rect2.left
    && rect1.top < rect2.top + rect2.height
    && rect1.top + rect1.height > rect2.top;
}

function isInsideCircle(circle, point) {
  const dx = point.x - circle.center.x;
  const dy = point.y - circle.center.y;

  return dx * dx + dy * dy < circle.radius * circle.radius;
}

function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);

    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }

  return null;
}

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let start = a;
  let end = b;
  let startIncluded = isStartIncluded;
  let endIncluded = isEndIncluded;

  if (start > end) {
    start = b;
    end = a;
    startIncluded = isEndIncluded;
    endIncluded = isStartIncluded;
  }

  const leftBracket = startIncluded ? '[' : '(';
  const rightBracket = endIncluded ? ']' : ')';

  return `${leftBracket}${start}, ${end}${rightBracket}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseInteger(num) {
  const sign = num < 0 ? -1 : 1;
  const reversed = Number(String(Math.abs(num)).split('').reverse().join(''));

  return sign * reversed;
}

function isCreditCardNumber(ccn) {
  const digits = String(ccn);

  if (!/^\d+$/.test(digits)) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;

  for (let i = digits.length - 1; i >= 0; i -= 1) {
    let digit = Number(digits.charAt(i));

    if (shouldDouble) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

function getDigitalRoot(num) {
  let value = Math.abs(num);

  while (value >= 10) {
    let sum = 0;

    while (value > 0) {
      sum += value % 10;
      value = Math.floor(value / 10);
    }

    value = sum;
  }

  return value;
}

function isBracketsBalanced(str) {
  const openingBrackets = ['(', '[', '{', '<'];
  const closingBrackets = [')', ']', '}', '>'];
  const stack = [];

  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const openingIndex = openingBrackets.indexOf(char);

    if (openingIndex !== -1) {
      stack.push(char);
    } else {
      const closingIndex = closingBrackets.indexOf(char);

      if (
        closingIndex === -1
        || stack.pop() !== openingBrackets[closingIndex]
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function toNaryString(num, n) {
  return num.toString(n);
}

function getCommonDirectoryPath(pathes) {
  if (pathes.length === 0) {
    return '';
  }

  let commonPrefix = pathes[0];

  pathes.slice(1).forEach((path) => {
    let commonLength = 0;
    const maxLength = Math.min(commonPrefix.length, path.length);

    while (
      commonLength < maxLength
      && commonPrefix.charAt(commonLength) === path.charAt(commonLength)
    ) {
      commonLength += 1;
    }

    commonPrefix = commonPrefix.slice(0, commonLength);
  });

  const lastSlash = commonPrefix.lastIndexOf('/');

  return commonPrefix.slice(0, lastSlash + 1);
}

function getMatrixProduct(m1, m2) {
  if (m1.length === 0 || m2.length === 0) {
    return [];
  }

  const result = [];

  for (let row = 0; row < m1.length; row += 1) {
    const resultRow = [];

    for (let column = 0; column < m2[0].length; column += 1) {
      let sum = 0;

      for (let index = 0; index < m2.length; index += 1) {
        sum += m1[row][index] * m2[index][column];
      }

      resultRow.push(sum);
    }

    result.push(resultRow);
  }

  return result;
}

function evaluateTicTacToePosition(position) {
  const lines = [
    [position[0][0], position[0][1], position[0][2]],
    [position[1][0], position[1][1], position[1][2]],
    [position[2][0], position[2][1], position[2][2]],
    [position[0][0], position[1][0], position[2][0]],
    [position[0][1], position[1][1], position[2][1]],
    [position[0][2], position[1][2], position[2][2]],
    [position[0][0], position[1][1], position[2][2]],
    [position[0][2], position[1][1], position[2][0]],
  ];

  const winningLine = lines.find((line) => (
    line[0] !== undefined
    && line[0] === line[1]
    && line[1] === line[2]
  ));

  return winningLine ? winningLine[0] : undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};

