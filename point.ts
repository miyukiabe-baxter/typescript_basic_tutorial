
export class Point {
  constructor(private _x?: number, private _y?: number) {

  }

  draw() {
    console.log('X is ' + this._x + 'and Y is ' + this._y)
  }
  //since I set x as a private, I cannot access to x value. Therefore, I am creatin a method which only return the value of x.
  //user cannot modify the value x but they can check what it is.
  get x() {
    return this._x
  }
  //It is inconvenient if user cannot change the value at all. we can create a method to make sure value has to be a specific type or range like this.
  set x(value) {
    if (value < 0)
      throw new Error('value cannot be less than 0')
    this._x = value
  }

}

