/* 
Lexical Scope defines how variable names are resolved in 
nested functions: inner functions 
contain the scope of parent functions 
even if the parent function has closed.
This is Closure in JavaScript
*/
let x = 1;

const parentFunction = () => {
    /*
    Local Scope
    */
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        /*
        Global Scope
        */
        console.log((x += 5));
        console.log((myValue += 1));
    };

    return childFunction;
};

const result = parentFunction();
console.log(result);
result();
result();
console.log(x);
//console.log(myValue); //reference error, private variable

/*
Closure example with IIFE
*/

const privateCounter = (() => {
    let count = 0;
    console.log('Function Declaration Parent Function');
    console.log(`initial value: ${count}`);

    /*
    Console.log ONLY called once in the return
    */
    return () => {
        /*
        NOT available in the global scope
        available overt the private count
        */
        count += 1;
        console.log('Anonymous Child Function');
        console.log(count);
    };
})();

privateCounter();
privateCounter();
privateCounter();

/*
Immediately Invoked Function
*/

const credits = ((num) => {
    let credits = num;
    console.log(credits);
    return () => {
        /*
        credits is the private variable
        anonymous function has closure
        */
        credits -= 1;
        if (credits > 0)
            console.log(`playing game, ${credits} credit(s) remaining`);
        else if (credits <= 0) {
            console.log('not enough credits');
        }
    };
})(3);

credits();
credits();
credits();
console.clear();
console.log('<----------------------------------->');
/*
Higher order functions
1) Take one or more functions as an argument(parameter)
2) Returns a function as a result
*/

//forEach()

console.log('\n');
console.log('forEach');
let nums = [1, 2, 4, 9, 23, 1, 24, 9, 4, 1, 9];

nums.forEach((number) => {
    number *= 3;
    console.log(number);
});

//Filter()
console.log('\n');
console.log('Filter');
const numberFilter = nums.filter((numbers) => numbers === 9);

console.log(numberFilter);

//Map()
console.log('\n');
console.log('Map');
const numberMap = numberFilter.map((numbers) => numbers * 2);

console.log(numberMap);
console.log('\n');

let friends = ['amber', 'julie', 'austin', 'sheila'];

let firstName = friends.map((friend) => {
    return friend.charAt(0).toUpperCase() + friend.slice(1);
});

console.log(firstName);

//Reduce()
console.log('\n');
console.log('Reduce');
const numberReduce = numberMap.reduce((sum, nums) => {
    return sum + nums;
});

console.log(numberReduce);

//Function Declaration
const getUserNameFromEmail = function (email) {
    return email.slice(0, email.indexOf('@'));
};

console.log(getUserNameFromEmail('jory@jorysdomain.com'));

/*
Arrow function creating my own Proper Case function
JavaScript has built in toUpperCase() and toLowerCase()
*/
const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase('jOrY'));
console.log(toProperCase('OcToBeR'));
console.log(toProperCase('mAy'));
console.log(toProperCase('sEpTeMbEr'));

/*
Objects

*/
const amazonEmployee = {
    name: 'Jory',
    occupation: 'Aspiring Software Engineer',
    age: '35',
    alive: true,
    hobbies: ['PlayStation 5', 'Going to the gym', 'Helping friends'],
    beverage: {
        morning: 'peach redbull',
        afternoon: 'workout shake',
    },
    action: function () {
        return `Time for ${this.beverage.morning}`;
    },
};

console.log(amazonEmployee.alive);
console.log(amazonEmployee['beverage'].morning);
console.log(amazonEmployee['hobbies'][0]);
console.log(amazonEmployee.action());

//Object with Inheritance
const vehicle = {
    wheels: 4,
    engine: function () {
        return 'vrooom';
    },
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine);

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
    return 'starting up';
};
console.log(car.engine());

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function () {
    return 'can you even hear me?';
};
console.log(tesla.engine());

const band = {
    vocals: 'Robert Plant',
    guitar: 'Jimmy Page',
    bass: 'John Paul Jones',
    drums: 'John Bonham',
};

console.log(Object.keys(band));
console.log(Object.values(band));

//For In Loop

for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}`);
}

//Destructuring Objects

const { vocals, guitar, bass, drums } = band;
console.log(guitar);
console.log(vocals);
console.log(drums);

const sings = ({ vocals }) => `${vocals} sings!`;

console.log(sings(band));
