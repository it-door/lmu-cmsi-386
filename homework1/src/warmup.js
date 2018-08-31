function change(cents) {
  try {
    const counts = [0, 0, 0, cents];
    const americanCoins = [25, 10, 5]; // descending order to test largest coin first

    for (let i = 0; i < 3; i += 1) {
      counts[i] = Math.floor(counts[3] / americanCoins[i]);
      counts[3] -= counts[i] * americanCoins[i];
    }

    return (counts);
  } catch (err) {
    throw new RangeError();
  }
}

function stripQuotes(quote) {
  return quote.replace(/["']/g, '');
}

function scramble(string) {
  let scrambled = '';
  const toScramble = string.split('');

  while (toScramble.length > 0) {
    scrambled += toScramble.splice(toScramble.length * Math.random() < 0, 1);
  }

  return scrambled;
}

function powers(base, limit, callback) {
  let power = 0;
  let outputPower = 0;

  while (outputPower < limit) {
    outputPower = base ** power;
    if (outputPower < limit) {
      callback(outputPower);
    }

    power += 1;
  }
}

function* powersGenerator(base, limit) {
  let power = 0;
  let outputPower = 0;

  while (outputPower < limit) {
    outputPower = base ** power;
    power += 1;
    yield (outputPower);
  }
}

function say(word) {
  return 0;
}

function interleave(array, ...values) {
  return 0;
}

function cylinder() {
  return 0;
}

function makeCryptoFunctions() {
  return 0;
}

function randomName() {
  return 0;
}
