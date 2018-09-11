import math

def change(cents):
    if cents < 0:
      raise ValueError('amount cannot be negative')
    count = ([0, 0, 0, cents])
    americanCoins = ([25, 10, 5])
    for i in range(3):
      count[i] = math.floor(count[3] / americanCoins[i])
      count[3] -= count[i] * americanCoins[i]
    return tuple(count)

def strip_quotes():
    pass

def scramble():
    pass

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
