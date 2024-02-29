'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest){
    hasDriversLicense = true;
}

console.log(hasDriversLicense? "I can drive 🚗": "I cannot drive 😔");*/

/*function name() {
    console.log("Name 👌");
}

name();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    return `Juice with ${apples} 🍎 and ${oranges} 🍊`;
}

console.log(fruitProcessor(6,6));*/

/*

function calcAge1(birthYear) {
    return 2024 - birthYear;
}

const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

const calcAge3 = birthYear => 2024 - birthYear;

console.log(calcAge2(1992));
console.log(calcAge3(1992));*/

const friends = ['A', 'B','C','D','E'];
/*console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length-1]);*/

/*friends.push("F");
console.log(friends);
console.log(friends.pop());
console.log(friends);
friends.unshift('Z');
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf('C'));
console.log(friends.at(2));
console.log(friends.includes('C'));*/

/*
const person = {
    firstName:"John",
    lastName:"Doe",
    age:2024-1992,
    job:"Teacher",
    friends: ['A', 'B','C','D','E']
}

console.log(person.firstName);
console.log(person['firstName']);*/

/*
const person = {
    firstName: "Thiago",
    lastName: "Nunes",
    birthYear: 1992,
    job: "Developer",

    calculateAge: function (currentYear){
        this.age = currentYear - this.birthYear;
        return this.age;
    },

    getSummary: function (){
        return `${this.firstName} is a ${this.calculateAge(2024)} years old ${this.job}.`
    }
}
person.calculateAge(2024);
console.log(person.age);
console.log(person.getSummary());*/

for(let rep = 1;rep<=10;rep++)
{
    console.log(`I have done ${rep} rep 🏋🏻`);
}
console.log("I am done! 😁🙌🏻");



