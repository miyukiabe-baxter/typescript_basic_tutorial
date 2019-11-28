// function log(message) {
//   console.log(message)
// }
// var message = 'Hello World'
// log(message)
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Family' + i);
}
doSomething();
// we can set the type of valuable in the typescript 
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [2, 't', 'f', true];
// e = [2, 34, 5]
// e = ['test', 'yo', 'ha']//I set the value type as array of number.
// e = 1
// f = ['test']
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// enum Color { Red = 0, Green = 1, Blue = 2 }; //if I try to write enum from scratch on js, it is way more complicated.
// let backgroundColor = Color.Red
// let message = 'abc'
// let message2;
// message2 = 'abcd'
// let endsWithC = message.endsWith('c')
// let endsWithD = (<string>message2).endsWith('d') //making sure this messgae2 value types are string
// let alternativeWay = (message2 as string).endsWith('d') //making sure this messgae2 value types are string
// Custom Type:
//since this is drawing function, we should make sure we always get number. It is tired some to add x, y, z,,,,, so we will change it to point
// let drawPoint = (x, y) => {}
// let drawPoint = (point) =>{}
//then, we can call drawPoint({x:1, y:2}), but user can put non number inside the object.
//to make sure that I get number args, i can update the function like below:
//let drawPoint = (point: {x: number, y:number}) =>{}
//This method is also tiredsome. Especially if I wann user x and y for different function. using "interface" is the recommened way:
//interface is defining the shape of object. but 
// interface Point {
//   x: number,
//   y: number
// }
// let drawPoint = (point: Point) => {
//   console.log(point)
// }
// drawPoint({ x: 3, y: 3 })
//we can do the same thing with class
// class Point {
//   x: number;
//   y: number;
//   draw() {
//     console.log('X is ' + this.x + 'and Y is ' + this.y)
//   }
// }
// let point = new Point()
// point.x = 1;
// point.y = 2
// point.draw()
//We can make it better!
// class Point {
//   constructor(private x?: number, private y?: number) {
//   }
//   draw() {
//     console.log('X is ' + this.x + 'and Y is ' + this.y)
//   }
//   //since I set x as a private, I cannot access to x value. Therefore, I am creatin a method which only return the value of x.
//   //user cannot modify the value x but they can check what it is.
//   getX() {
//     return this.x
//   }
//   //It is inconvenient if user cannot change the value at all. we can create a method to make sure value has to be a specific type or range like this.
//   setX(value) {
//     if (value < 0)
//       throw new Error('value cannot be less than 0')
//     this.x = value
//   }
// }
// //Because I added ? mark infron to of x and y argument, passing argument becuase optional
// //let point = new Point()
// let point = new Point(3, 4)
// //I cannot access to pint.x or point.y because I set them as "private"
// point.draw()
// point.getX()
// instead, if I change it to get X(){} / set X(value), we dont need to call function anymore.
//we can just say let x = point.X to get the value of X. we can say point.X =10 to change the value
//We can make it way better!!!!
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X is ' + this._x + 'and Y is ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        //since I set x as a private, I cannot access to x value. Therefore, I am creatin a method which only return the value of x.
        //user cannot modify the value x but they can check what it is.
        get: function () {
            return this._x;
        },
        //It is inconvenient if user cannot change the value at all. we can create a method to make sure value has to be a specific type or range like this.
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 3);
var x = point.x;
console.log('getting x', x);
point.x = 4;
console.log('setting new value', x);
point.draw();
