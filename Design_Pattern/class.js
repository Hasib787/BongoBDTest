//Questions 

class Vehicle {
    constructor(set_num_of_wheels,set_num_of_passengers,has_gas) {
        this.set_num_of_wheels = set_num_of_wheels;
        this.set_num_of_passengers = set_num_of_passengers;
        this.has_gas = has_gas;
    }
}

//Answer for the Question 2(a)

class Car{
    constructor(set_num_of_wheels, set_num_of_passengers, has_gas) {
        this.set_num_of_wheels = set_num_of_wheels;
        this.set_num_of_passengers = set_num_of_passengers;
        this.has_gas = has_gas;
    }
}
const myCar = new Car(4, 5, "200L");
console.log(myCar);

class Plane{
    constructor(set_num_of_wheels, set_num_of_passengers, has_gas) {
        this.set_num_of_wheels = set_num_of_wheels;
        this.set_num_of_passengers = set_num_of_passengers;
        this.has_gas = has_gas;
    }
}
const myPlane = new Plane(2, 100, "5000L");
console.log(myPlane);

//Solution for the Question 2(b)

class Vehicle {
    constructor(set_num_of_wheels,set_num_of_passengers,has_gas) {
        this.set_num_of_wheels = set_num_of_wheels;
        this.set_num_of_passengers = set_num_of_passengers;
        this.has_gas = has_gas;
    }
}
var car = new Vehicle(4, 5, 200);
var plane = new Vehicle(2, 100, 5000);
console.log(car);
console.log(plane);