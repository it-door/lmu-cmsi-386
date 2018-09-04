function change(cents) {
  if (cents < 0) {
    throw new RangeError();
  }

  const counts = [0, 0, 0, cents];
  const americanCoins = [25, 10, 5];

  for (let i = 0; i < 3; i += 1) {
    counts[i] = Math.floor(counts[3] / americanCoins[i]);
    counts[3] -= counts[i] * americanCoins[i];
  }

  return (counts);
}

function stripQuotes(quote) {
  return quote.replace(/["']/g, '');
}

function scramble(string) {
  let scrambled = '';
  const toScramble = string.split('');

  while (toScramble.length > 0) {
    scrambled += toScramble.splice(Math.round(toScramble.length * Math.random()), 1);
  }

  return scrambled;
}

function powers(base, limit, callback) {
  let power = 0;
  let outputPower = base ** power;
  power += 1;

  while (outputPower <= limit) {
    callback(outputPower);
    outputPower = base ** power;
    power += 1;
  }
}

function* powersGenerator(base, limit) {
  let power = 0;
  let outputPower = base ** power;
  power += 1;

  while (outputPower <= limit) {
    yield (outputPower);
    outputPower = base ** power;
    power += 1;
  }
}

function say(word) {
  if (word === undefined) {
    return '';
  }
  return function curry(otherWord) {
    if (otherWord === undefined) {
      return word;
    }
    return say(`${word} ${otherWord}`);
  };
}

function interleave(array, ...values) {
  const interleaved = [];

  for (let i = 0, j = 0; i < array.length || j < values.length;) {
    if (i < array.length) {
      interleaved.push(array[i]);
      i += 1;
    }
    if (j < values.length) {
      interleaved.push(values[j]);
      j += 1;
    }
  }

  return interleaved;
}

function cylinder(spec) {
  let { radius, height } = spec;

  if (radius === undefined) {
    radius = 1;
  }
  if (height === undefined) {
    height = 1;
  }

  const surfaceArea = () => 2 * Math.PI * radius * height + 2 * Math.PI * radius * radius;
  const volume = () => Math.PI * radius * radius * height;
  const widen = (factor) => { radius *= factor; };
  const stretch = (factor) => { height *= factor; };
  const toString = () => `Cylinder with radius ${radius} and height ${height}`;
  return Object.freeze({
    surfaceArea,
    volume,
    get radius() { return radius; },
    get height() { return height; },
    widen,
    stretch,
    toString,
  });
}

const crypto = require('crypto');

function makeCryptoFunctions(key, algorithm) {
  const funcs = [];
  funcs[0] = function encrypt(utf8) {
    const theKey = crypto.createCipher(algorithm, key);
    let hex = theKey.update(utf8, 'utf8', 'hex');
    hex += theKey.final('hex');
    return hex;
  };
  funcs[1] = function decrypt(hex) {
    const theKey = crypto.createDecipher(algorithm, key);
    let utf8 = theKey.update(hex, 'hex', 'utf8');
    utf8 += theKey.final('utf8');
    return utf8;
  };
  return funcs;
}

const request = require('request');

function randomName(info) {
  return new Promise((resolve, reject) => {
    request(`https://uinames.com/api/?amount=1&gender=${info.gender}&region=${info.region}`, (error, response, body) => {
      if (error || response.statusCode !== 200) reject(new Error(response.statusCode));
      else resolve(`${body.surname}, ${body.name}`);
    });
  });
}

module.exports = {
  change,
  stripQuotes,
  scramble,
  cylinder,
  randomName,
  say,
  makeCryptoFunctions,
  interleave,
  powers,
  powersGenerator,
};
