function getComposition(f, g) {
  return function composition(x) {
    return f(g(x));
  };
}



function getPowerFunction(exponent) {
  return function power(x) {
    return Math.pow(x, exponent);
  };
}

function getPolynom(...coefficients) {
  if (coefficients.length === 0) {
    return null;
  }

  return function polynom(x) {
    return coefficients.reduce(
      (result, coefficient) => (result * x) + coefficient,
      0,
    );
  };
}

function memoize(func) {
  let hasCachedResult = false;
  let cachedResult;

  return function memoized(...args) {
    if (hasCachedResult) {
      return cachedResult;
    }

    cachedResult = func.apply(this, args);
    hasCachedResult = true;

    return cachedResult;
  };
}

function retry(func, attempts) {
  return function retryer(...args) {
    let lastError;

    for (let i = 0; i < attempts; i += 1) {
      try {
        return func.apply(this, args);
      } catch (error) {
        lastError = error;
      }
    }

    throw lastError;
  };
}

function logger(func, logFunc) {
  return function loggedFunction(...args) {
    const formattedArgs = args.map((arg) => {
      const json = JSON.stringify(arg);

      return json === undefined ? String(arg) : json;
    }).join(',');

    const callDescription = `${func.name}(${formattedArgs})`;

    logFunc(`${callDescription} starts`);

    try {
      return func.apply(this, args);
    } finally {
      logFunc(`${callDescription} ends`);
    }
  };
}

function partialUsingArguments(fn, ...args1) {
  return function partiallyApplied(...args2) {
    return fn.apply(this, args1.concat(args2));
  };
}

function getIdGeneratorFunction(startFrom) {
  let currentId = startFrom;

  return function generateId() {
    const id = currentId;
    currentId += 1;

    return id;
  };
}

module.exports = {
  getComposition,
  getPowerFunction,
  getPolynom,
  memoize,
  retry,
  logger,
  partialUsingArguments,
  getIdGeneratorFunction,
};