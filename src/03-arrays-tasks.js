function findElement(arr, value) {
  return arr.indexOf(value);
}

function generateOdds(len) {
  return Array.from({ length: len }, (value, index) => (index * 2) + 1);
}

function doubleArray(arr) {
  return arr.concat(arr);
}

function getArrayOfPositives(arr) {
  return arr.filter((value) => typeof value === 'number' && value > 0);
}

function getArrayOfStrings(arr) {
  return arr.filter((value) => typeof value === 'string');
}

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

function getUpperCaseStrings(arr) {
  return arr.map((value) => value.toUpperCase());
}

function getStringsLength(arr) {
  return arr.map((value) => value.length);
}

function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  return n === 0 ? [] : arr.slice(-n);
}

function toCsvText(arr) {
  return arr.map((row) => row.join(',')).join('\n');
}

function toArrayOfSquares(arr) {
  return arr.map((value) => value * value);
}

function getMovingSum(arr) {
  return arr.reduce((result, value) => {
    const previousSum = result.length === 0
      ? 0
      : result[result.length - 1];

    return result.concat(previousSum + value);
  }, []);
}

function getSecondItems(arr) {
  return arr.filter((value, index) => index % 2 === 1);
}

function propagateItemsByPositionIndex(arr) {
  return arr.reduce(
    (result, value, index) => result.concat(Array(index + 1).fill(value)),
    [],
  );
}

function get3TopItems(arr) {
  return arr.slice().sort((value1, value2) => value2 - value1).slice(0, 3);
}

function getPositivesCount(arr) {
  return arr.filter(
    (value) => typeof value === 'number' && value > 0,
  ).length;
}

function sortDigitNamesByNumericOrder(arr) {
  const digitNames = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  return arr.slice().sort(
    (value1, value2) => digitNames.indexOf(value1) - digitNames.indexOf(value2),
  );
}

function getItemsSum(arr) {
  return arr.reduce((sum, value) => sum + value, 0);
}

function getFalsyValuesCount(arr) {
  return arr.filter((value) => !value).length;
}

function findAllOccurrences(arr, item) {
  return arr.filter((value) => value === item).length;
}

function toStringList(arr) {
  return arr.join(',');
}

function sortCitiesArray(arr) {
  return arr.slice().sort((city1, city2) => (
    city1.country.localeCompare(city2.country)
    || city1.city.localeCompare(city2.city)
  ));
}

function getIdentityMatrix(n) {
  return Array.from({ length: n }, (value, rowIndex) => (
    Array.from({ length: n }, (item, columnIndex) => (
      rowIndex === columnIndex ? 1 : 0
    ))
  ));
}
function getIntervalArray(start, end) {
  const length = Math.max(0, end - start + 1);

  return Array.from(Array(length).keys()).map((index) => start + index);
}

function distinct(arr) {
  return Array.from(new Set(arr));
}

function group(array, keySelector, valueSelector) {
  return array.reduce((result, item) => {
    const key = keySelector(item);

    if (!result.has(key)) {
      result.set(key, []);
    }

    result.get(key).push(valueSelector(item));

    return result;
  }, new Map());
}

function selectMany(arr, childrenSelector) {
  return arr.reduce(
    (result, value) => result.concat(childrenSelector(value)),
    [],
  );
}

function getElementByIndexes(arr, indexes) {
  return indexes.reduce((value, index) => value[index], arr);
}

function swapHeadAndTail(arr) {
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return arr.slice(middleIndex).concat(arr.slice(0, middleIndex));
  }

  return arr.slice(middleIndex + 1)
    .concat(arr.slice(middleIndex, middleIndex + 1), arr.slice(0, middleIndex));
}

module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  toStringList,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
