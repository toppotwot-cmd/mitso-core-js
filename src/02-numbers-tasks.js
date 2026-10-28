function getRectangleArea(width, height) {
  return width * height;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getAverage(value1, value2) {
  return value1 / 2 + value2 / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;

  return Math.sqrt(dx * dx + dy * dy);
}

function getLinearEquationRoot(a, b) {
  return -b / a;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const length1 = Math.sqrt(x1 * x1 + y1 * y1);
  const length2 = Math.sqrt(x2 * x2 + y2 * y2);

  if (length1 === 0 || length2 === 0) {
    return 0;
  }

  const cosine = dotProduct / (length1 * length2);
  const clampedCosine = Math.max(-1, Math.min(1, cosine));

  return Math.acos(clampedCosine);
}

function getLastDigit(value) {
  return Math.abs(value % 10);
}

function parseNumberFromString(value) {
  return Number(value);
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a * a + b * b + c * c);
}

function roundToPowerOfTen(num, pow) {
  const power = 10 ** pow;

  return Math.round(num / power) * power;
}

function isPrime(n) {
  if (!Number.isInteger(n) || n <= 1) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  if (n % 2 === 0) {
    return false;
  }

  let i = 3;

  while (i <= Math.sqrt(n)) {
    if (n % i === 0) {
      return false;
    }

    i += 2;
  }

  return true;
}

function toNumber(value, def) {
  try {
    const result = Number(value);

    return Number.isNaN(result) ? def : result;
  } catch (error) {
    return def;
  }
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
