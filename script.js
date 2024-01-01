/**GLAB 308A.2.1: An Object-Oriented Adventure
Version 1.0, 10/13/23

Introduction
This is guided activity of creating a simple adventuring game using object-oriented programming principles.

Objectives
Use nested arrays and objects.
Combine objects, arrays, and functions.
Create a class to define the blueprint for instantiating objects, set properties on an instance of a class, and add prototype and static methods for a class and to alter the properties of an instance.
use inhiretance and Create a "factory."
*/

/** The Adventure game
 * Part 1: Humble Beginnings
Let’s model a simple adventurer with basic properties such as health and an inventory. 
We will call the adventurer “Robin.”
*/

const adventurer = {
name: "Robin",
health: 10,
inventory: ["sword", "potion", "artifact"]
}

//we can access Robin’s inventory (ex: a sword)

console.log('the 1st inventory is a:',adventurer.inventory[0]);

//create a loop that logs each item in Robin’s inventory.
adventurer.inventory.forEach(element => {
    console.log(element);
});

//Robin has a companion travels with – a furry friend called “Leo.”
adventurer.companion={name: "Leo",type: "Cat"};


//Next, give Robin’s feline friend a friend of his own: Add a “companion” sub-object to “Leo” with the following properties:The companion’s name is “Frank.”The companion’s type is “Flea.”The companion has its own belongings, which includes a small hat and sunglasses.

adventurer.companion.companion={
    name: "Frank",
    type: "Flea",
    belongings: ['small hat','sunglasses']
}

//Methods define specific actions that object can take. Adding Roll method to the adventurer:

adventurer.roll = function (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
}