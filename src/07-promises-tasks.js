function willYouMarryMe(isPositiveAnswer) {
  return new Promise((resolve, reject) => {
    if (typeof isPositiveAnswer !== 'boolean') {
      reject(new Error('Wrong parameter is passed! Ask her again.'));
      return;
    }

    if (isPositiveAnswer) {
      resolve('Hooray!!! She said "Yes"!');
      return;
    }

    resolve('Oh no, she said "No".');
  });
}

function processAllPromises(array) {
  return Promise.all(array);
}

function getFastestPromise(array) {
  return Promise.race(array);
}

function chainPromises(array, action) {
  const handledPromises = array.map((promise) => (
    Promise.resolve(promise).then(
      (value) => ({
        rejected: false,
        value,
      }),
      () => ({
        rejected: true,
      }),
    )
  ));

  const initialState = {
    hasValue: false,
    value: undefined,
  };

  return handledPromises.reduce(
    (chain, currentPromise) => chain.then((state) => (
      currentPromise.then((result) => {
        if (result.rejected) {
          return state;
        }

        if (!state.hasValue) {
          return {
            hasValue: true,
            value: result.value,
          };
        }

        return {
          hasValue: true,
          value: action(state.value, result.value),
        };
      })
    )),
    Promise.resolve(initialState),
  ).then((state) => state.value);
}

module.exports = {
  willYouMarryMe,
  processAllPromises,
  getFastestPromise,
  chainPromises,
};
