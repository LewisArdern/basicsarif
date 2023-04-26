print("Hello, world!")
expr = "hello"
use_input(expr)
eval(expr)
def use_input(raw_input):
    print(eval(raw_input))
    