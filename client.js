const companies = [
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



// FOREACH
// for loop
for (var i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// forEach:  a better way to loop through an array; like a for loop
// takes in a synchronous callback function
companies.forEach(function(company) {
  console.log(company);
});



// FILTER:  filter items in an array
// for loop:  filter all ages 21 and older
let canDrink = [];

for (var i = 0; i < ages.length; i++) {
  if(ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

// filter:  filter all ages 21 and older
const canDrink2 = ages.filter(function(age) {
  if(age >= 21) {
    return true;
  }
});
console.log(canDrink2);

// filter:  with arrow function
const canDrink3 = ages.filter(age => age >= 21);
console.log(canDrink3);

// filter:  retail companies
const retailCompanies = companies.filter(function(company) {
  if(company.category === 'Retail') {
    return true;
  }
});
console.log(retailCompanies);

// filter:  retail companies with arrow function
const retailCompanies2 = companies.filter(company =>
  company.category === 'Retail');
  console.log(retailCompanies2);

// filter:  companies from the '80s
const eightiesCompanies = companies.filter(company =>
  (company.start >= 1980 && company.start < 1990));
  console.log(eightiesCompanies);

// filter:  companies that lasted at least 10 years
const lastedTenYears = companies.filter(company =>
  (company.end - company.start >= 10));
  console.log(lastedTenYears);



// MAP:  create a new array from an existing array
// map:  grab company names and put them into a new array
const companyNames = companies.map(function(company) {
  return company.name;
});
console.log(companyNames);

// map:  ES6 template string
const testMap = companies.map(function(company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(testMap);

// map:  shorthand
const testMap2 = companies.map(company =>
  `${company.name} [{$company.start} - ${company.end}]`);
console.log(testMap2);

// map:  square
const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

// map:  multiply
const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);

// map:  square times 2
const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);
console.log(ageMap);



// SORT
// sort:  companies by start year
const sortedCompanies = companies.sort(function(c1, c2) {
  if(c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortedCompanies);

// sort:  with ternary operator
const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies2);

// sort:  ages
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);



// REDUCE
// for loop:  add ages
let ageSum = 0;
for (var i = 0; i < ages.length; i++) {
  ageSum += ages[i];
};
console.log(ageSum);

// reduce:  add ages
const ageSum2 = ages.reduce(function(total, age) {
  return total + age;
}, 0);
console.log(ageSum2);

// reduce:  add ages with arrow function
const ageSum3 = ages.reduce((total, age) => total + age, 0);
console.log(ageSum3);

// reduce:  add total years for all companies
const totalYears = companies.reduce(function(total, company) {
  return total + (company.end - company.start);
}, 0);
console.log(totalYears);

// reduce:  add total years for all companies with arrow function
const totalYears2 = companies.reduce((total, company) =>
  total + (company.end - company.start), 0);
console.log(totalYears2);



// COMBINE METHODS
const combined = ages
  .map(age => age *2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(combined);
