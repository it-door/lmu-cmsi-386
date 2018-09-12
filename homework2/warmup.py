import math
import random
import Crypto

def change(cents):
    if cents < 0:
      raise ValueError('amount cannot be negative')
    count = ([0, 0, 0, cents])
    american_coins = ([25, 10, 5])
    for i in range(3):
      count[i] = math.floor(count[3] / american_coins[i])
      count[3] -= count[i] * american_coins[i]
    return tuple(count)

def strip_quotes(quote):
    return quote.replace('"', '').replace("'", '')

def scramble(string):
    return ''.join(random.sample(string, len(string)))

def say(word = None):
    if word == None:
        return ''
    def curry(otherWord = None):
      print(otherWord)
      if (otherWord == None):
        return word
      return say(word % " " % otherWord)

def triples(n):
    return [(c,b,a) for a in range(n+1) for b in range(a) for c in range(b) if a*a == b*b + c*c]

def powers(base, limit):
    power = 0
    outputPower = base ** power
    power += 1

    while outputPower <= limit:
      yield (outputPower)
      outputPower = base ** power
      power += 1

def interleave(array, *values):
    interleaved = []
    for i,j in zip(range(len(array)), range(len(values))):
      if i < len(array):
        interleaved.append(array[i])
        i += 1

      if j < len(values):
        interleaved.append(values[j])
        j += 1
    return interleaved

def Cylinder():
    pass

def make_crypto_functions():
    pass

def random_name():
    pass
