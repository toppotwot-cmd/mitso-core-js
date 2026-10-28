/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}

function getStringLength(value) {
  return value.length;
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  return value.slice(7, -1);
}

function getFirstChar(value) {
  return value.charAt(0);
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function repeatString(value, count) {
  return value.repeat(count);
}

function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

function unbracketTag(str) {
  return str.slice(1, -1);
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function extractEmails(str) {
  return str.split(';').map((email) => email.trim());
}

function getRectangleString(width, height) {
  const horizontal = '─'.repeat(width - 2);
  const spaces = ' '.repeat(width - 2);
  let result = `┌${horizontal}┐\n`;
  let i = 0;

  while (i < height - 2) {
    result += `│${spaces}│\n`;
    i += 1;
  }

  result += `└${horizontal}┘\n`;

  return result;
}

function encodeToRot13(str) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + 13) % 26) + 65);
    }

    return String.fromCharCode(((code - 97 + 13) % 26) + 97);
  });
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function getCardId(value) {
  const ranks = [
    'A', '2', '3', '4', '5', '6', '7',
    '8', '9', '10', 'J', 'Q', 'K',
  ];
  const suits = ['♣', '♦', '♥', '♠'];
  const rank = value.slice(0, -1);
  const suit = value.slice(-1);
  const rankIndex = ranks.indexOf(rank);
  const suitIndex = suits.indexOf(suit);

  if (rankIndex === -1 || suitIndex === -1) {
    return -1;
  }

  return suitIndex * ranks.length + rankIndex;
}

module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
