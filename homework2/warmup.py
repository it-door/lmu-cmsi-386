import math
import random
import Crypto
import base64

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
        if otherWord == None:
          return curry.string
        curry.string += " " + otherWord
        return curry
    curry.string = word
    return curry

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

def interleave(a, b = None):
    if b == None:
        return a
    return [item for pair in zip(a, b) for item in pair] + a[len(b):] + b[len(a):]

class Cylinder:
    def __init__(self, radius=1, height=1):
      self.radius = radius
      self.height = height
      self.volume = self.radius * self.radius * math.pi * self.height
      self.surface_area = 2 * math.pi * self.radius * self.height + 2 * math.pi * self.radius * self.radius
    def widen(self, factor):
      self.radius *= factor
      self.volume = self.radius * self.radius * math.pi * self.height
      self.surface_area = 2 * math.pi * self.radius * self.height + 2 * math.pi * self.radius * self.radius
      return self.radius
    def stretch(self, factor):
      self.height *= factor
      self.volume = self.radius * self.radius * math.pi * self.height
      self.surface_area = 2 * math.pi * self.radius * self.height + 2 * math.pi * self.radius * self.radius
      return self.height

def make_crypto_functions(key, IV):
    def e():
        pass
    def d():
        pass

def random_name():
    pass
