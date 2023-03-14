print("Hello, world!")
expr = input("Expression> ")
use_input(expr)

def use_input(raw_input):
    print(eval(raw_input))