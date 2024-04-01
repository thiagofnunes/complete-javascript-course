'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 24,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (startingIndex, mainIndex) {
        return [this.starterMenu[startingIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({starterIndex = 1, mainIndex = 1, time, address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]}
         and ${this.mainMenu[mainIndex]}
          will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    }
};

const arr = [2, 3, 4, 5];
const [x, y, z] = arr;
console.log(x, y, z);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);
[secondary, main] = [main, secondary];
console.log(main, secondary);


console.log(restaurant.order(2, 0));

const [a = 1, b = 1, c = 1] = [8, 9];
console.log(a, b, c);

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: availableHours, categories: foodCategories} = restaurant;
console.log(restaurantName, availableHours, foodCategories);

const {menu = [], starterMenu: starters = []} = restaurant;

const {fri: {open, close}} = openingHours;
console.log(open, close);

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2

});

const arr2 = [7, 8, 9];
const badNewArr = [1,2, arr2[0], arr2[1], arr2[2]];
console.log(badNewArr);
const goodArr = [1, 2, ...arr2]; //Spread operator
console.log(goodArr);
console.log(...goodArr);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
const mainMenuCopy = [...restaurant.mainMenu];
const menuCopy = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuCopy);

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

const ingredients = [prompt('Lets make pasta, please choose the first ingredient.'),
    prompt('Please choose the second ingredient.'),
    prompt('Please choose the third ingredient.')]
restaurant.orderPasta(...ingredients);
const newRestaurant = {foundedIn:1990, ...restaurant,founder:'Mario'};
console.log(newRestaurant);

