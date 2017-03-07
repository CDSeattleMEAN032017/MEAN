// We are going to create our very own constructor.
//  Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers.
//  Then complete the following tasks:

function VehicleConstructor(name, numberofwheels,numberofpassengers, vehiclespeed){
// each vehicle should have a makeNoise method
//private -------------------------------------
  Private_distance_travelled_Var = 0;


//public --------------------------------------
    this.Private_distance_travelled_Meth = function(){
      Private_distance_travelled_Var += this.speed;
  };
    this.name =  name;
    this.numberofwheels = numberofwheels;
    this.numberofpassengers = numberofpassengers;
    this.speed = vehiclespeed;

  }
  VehicleConstructor.prototype.randomVin = function(){
    console.log('hi')
    array = []
    for (var i = 0; i < 18; i++){
      array.push(Math.floor(Math.random()*10))
    }
    console.log(array.join(""))
  }
  VehicleConstructor.prototype.checkMiles = function(){
      console.log(Private_distance_travelled_Var)
    }
  VehicleConstructor.prototype.move = function(){
        this.Private_distance_travelled_Meth()
        this.makeNoise()
      }
  VehicleConstructor.prototype.makeNoise = function(noise){
    var noise = noise || "Honk Honk"
    console.log(noise);
    return this;
  }
// Using the constructor, create a Bike
var Bike = new VehicleConstructor('Bianchi', 2, 1, 5)
Bike.makeNoise().makeNoise()
Bike.randomVin()
Bike.checkMiles()
Bike.move()

Bike.makeNoise()
// Redefine the Bike’s makeNoise method to print “ring ring!

Bike.makeNoise = function(){
  console.log("ring ring!");
  return this;
}


//
// // Create a Sedan
//
var Sedan = new VehicleConstructor('Sedan', 4, 4)
//
// // Redefine the Sedan’s makeNoise method to print “Honk Honk!”
//
Sedan.makeNoise = function (){
  console.log('Honk Honk')
}

Sedan.makeNoise()
//
// // Using the constructor, create a Bus
//
var Bus = new VehicleConstructor('Bus', 4, 20)
// // Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​
//
Bus.addpassengers = function(pickup){
  this.numberofpassengers += pickup
  return this.numberofpassengers
}


Bus.addpassengers(4)

console.log(Bus.numberofpassengers)
