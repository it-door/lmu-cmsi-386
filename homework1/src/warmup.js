function change(cents) {
  if (cents < 0) {
    throw new RangeError();
  }

  const counts = [0, 0, 0, cents];
  const americanCoins = [25, 10, 5]; // descending order to test largest coin first

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
    scrambled += toScramble.splice(toScramble.length * Math.random() << 0, 1);
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
  return 0;
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
    surfaceArea, volume, widen, stretch, toString, radius, height,
  });
}

function makeCryptoFunctions(key, algorithm) {
  return 0;
}

function randomName(args) {
  return 0;
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
