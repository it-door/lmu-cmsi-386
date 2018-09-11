import math
import random

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

def say():
    pass

def triples():
    pass

def powers():
    pass

def interleave():
    pass

def Cylinder():
    pass

def make_crypto_functions():
    pass

def random_name():
    pass
