const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// forEach
// companies.forEach(function(company) {
//     console.log(company.category);
// })

// let canDrink = [];
// for (let i = 0; i < ages.length;i++){
//     if (ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// const canDrink = ages.filter(function(age){
//     if(age >= 21) {
//         return true
//     } 
// });

//const canDrink = ages.filter(age => age >= 21);

//Filter retail companies

const retailCompanies = companies.filter(company => company.category === "Retail");

// get 80s companies

const e_companies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

//get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

//map
//Creat array of company names
// const companyName = companies.map(function (company){
//     return company.name;
// });
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);


// const ageSquare = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2);

//sort
// Sort companies by start year
// const sortedCompanies = companies.sort(function (c1, c2){
//     if (c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

//const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

//Sort ages
//const sortAges = ages.sort((a, b) => a - b);

//reduce 
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);

//const ageSum = ages.reduce((total, age) => total + age, 0);

//Get total years for all companies
// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);

//const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

//Combine Methods
// const combined = ages
//     .map(age => age * 4)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0);

// console.log(combined);

// let total = 0, total = 1;
// while (total <= 10) {
//   total += total;
//   total += 1;
// }
// console.log(total);

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[3]);

// console.log(secretMessage);

const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
 
delete spaceship.mission;  // Removes the mission property
// console.log(spaceship);

const myDog = {
  name: 'Tadpole',
  breed: 'mutt',
  color: 'tan',
  weight: 32
}

// const {shit} = myDog;

// console.log(myDog);

// Create a new array without the last element. 
// Join the elements of this new array with a comma. 
// Append the last element of the original array. Handle edge cases separately.
// const list = arr => {
//   let pop = arr.pop()
//   let newarr = arr.join(",")
//   return newarr + " and " + pop;
// }
// const isPrime = n => {
//   let di = 0;
//   do{
//     di++;
    
//   } while (di % n !== 0)
//   return di
  
// }



//http://localhost:5500/JavaScript/ 


// parseFirstInt('No. 10') should return 10 
// and parseFirstInt('Babylon') should return NaN.

// const parseFirstInt = str => {
//   let changtonum = "";
//   for (let i = 0; i < str.length; i++){
//     if(parseInt(str, 10)){
//       return parseInt(str, 10)
//     }
//     else if(Number.isNaN(parseInt(str[i])) === false ){
      
//       changtonum += str[i]
      
//     }
//   }
//   let num = parseInt(changtonum)
//   console.log(num)
// }

// function parseFirstInt(input) {

//   let inputToParse = input;
  
//   for (let i = 0; i < input.length; i++) {
//     let firstInt = parseInt(inputToParse);
//     console.log(firstInt)
//     if (!Number.isNaN(firstInt)) {
//       return firstInt;
//     }
//     inputToParse = inputToParse.substr(1);
    
//   }

//   return NaN;
// }

// parseFirstInt('sum: -120')

//('Li is 22 years old.')  ('sum: -120')


// const arabic = num =>{

// }

// const convert = str =>{
//     let str = 0;
//     switch (str) {
//       case "I":
//         return 1;
//       case "V":
//         return 5;
    
//     }



// }

// arabic('CDLXXXIII') //483


// Write a function sumMultiples taking a natural number n and 
// returning the sum of all multiples of 3 and of 5 that are truly less than n.

// Example: All multiples of 3 and 5 less than 20 are 3, 5, 6, 9, 10, 12, 15 and 18. 
// Their sum is 78. sumMultiples(20) should return 78.


// const sumMultiples = num => {

// };
const Array;
[...Array(1000).keys()].reduce((a,b) => a + (!((b % 3) || !(b % 5)) && b), 0)

console.log(...Array(1000).keys())