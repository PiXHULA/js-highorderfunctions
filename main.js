const companies = [
    {name: "Company one", category: "Finance", start: 1982, end: 2003},
    {name: "Company two", category: "Retail", start: 1992, end: 2008},
    {name: "Company three", category: "Auto", start: 1999, end: 2007},
    {name: "Company four", category: "Retail", start: 1989, end: 2010},
    {name: "Company five", category: "Technology", start: 2009, end: 2014},
    {name: "Company six", category: "Finance", start: 1987, end: 2010},
    {name: "Company seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 23, 16, 6, 54, 44, 61, 13, 15, 45, 25, 64, 32];

//forEach
//Normal for-loop
console.log("FOREACH");
for (let i = 0; i < companies.length; i++){
    console.log(companies[i]);
}
//----------------------------------------------
companies.forEach(function (company) {
    console.log(company);
});
//----------------------------------------------
//filter
//Normal for-loop
console.log("FILTER");
const canDrink = [];
for(let i = 0; i < ages.length; i++){
    if(ages[i] > 21){
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);
//----------------------------------------------
//ES5
const canDrinkFilter = ages.filter(function(age) {
    if(age > 21){
        return true;
    }
});
console.log(canDrinkFilter);
//----------------------------------------------
const canDrinkFilterArrow = ages.filter((age => age > 21));
console.log(canDrinkFilterArrow);
//----------------------------------------------

const companyCategoryFilter = companies.filter(function(company){
    if(company.category === 'Retail'){
        return true;
    }
})
console.log(companyCategoryFilter);
//----------------------------------------------
let companyCategoryFilterArrow = companies.filter(company => company.category === 'Retail');
console.log(companyCategoryFilterArrow);
//----------------------------------------------
let companyEightiesFilterArrow = companies.filter(company => company.start >= 1980 && company.end < 1990);
console.log(companyEightiesFilterArrow);
//----------------------------------------------
let companiesLastedTenYearsFilterArrow = companies.filter(company => (company.end - company.start >= 10));
console.log(companiesLastedTenYearsFilterArrow);
//----------------------------------------------

//map
// Create array of company names
console.log("MAP");
const companyNames = companies.map(company => company.name);
console.log(companyNames);
//----------------------------------------------
//Names and Category
const companyNamesAndCategory = companies.map(company => `${company.name}, ${company.category}`);
console.log(companyNamesAndCategory);
//----------------------------------------------
//Names and Years lasted
const companyNamesAndYearsLasted = companies.map(company => `name: ${company.name}, years: ${company.end - company.start}`)
console.log(companyNamesAndYearsLasted);

//Ages squared
const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

//Ages * 2
const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);
//----------------------------------------------
//Squared and doubled
const agesSqrdAndDoubled = ages
.map(age => Math.sqrt(age))
.map(age => age * 2);
console.log(agesSqrdAndDoubled);
//----------------------------------------------
//Doubled and Squared
const agesDoubledAndSqrd = ages
.map(age => age * 2)
.map(age => Math.sqrt(age));
console.log(agesDoubledAndSqrd);
//----------------------------------------------

//sort
console.log("SORT");
//ES5
//Sort startyear of companies
const sortedCompanies = companies.sort(function(c1,c2){
    if(c1.start > c2.start){
        return 1;
    } else {
        return -1
    }
})
console.log(sortedCompanies);
//----------------------------------------------
//ES6
const sortedCompaniesArrow = companies.sort((a,b) => a.start > b.start ? 1 : -1);
console.log(sortedCompaniesArrow);
//----------------------------------------------
//ES6
//Sort ages
const sortedAgeArrow = ages.sort((a,b) => a > b ? 1 : -1);
console.log(sortedAgeArrow);
const sortedAgeArrowasc = ages.sort((a,b) => a - b);
console.log(sortedAgeArrowasc);
const sortedAgeArrowdesc = ages.sort((a,b) => b - a);
console.log(sortedAgeArrowdesc);

//reduce
//for loop
let ageSum = 0;
for(let i = 0; i < ages.length; i++){
    ageSum += ages[i];
}
console.log(ageSum);
//----------------------------------------------
//ES5
const ageSumReduce = ages.reduce(function(total, age){
    return total + age;
}, 0);
console.log(ageSumReduce);
//----------------------------------------------
//ES6
const ageSumReduceArrow = 
ages.reduce((total, age) => total + age, 0);
console.log(ageSumReduceArrow);

//ES5
const totalYearsofAllCompanies = companies.reduce(function(total, company){
    return total + (company.end-company.start);
}, 0);
console.log(totalYearsofAllCompanies);
//----------------------------------------------
//ES6
const totalYearsofAllCompaniesArrow = companies
.reduce((total, company) => total + (company.end-company.start), 0);
console.log(totalYearsofAllCompaniesArrow);


//Combining
const combined = ages
.map(age => age * 2)
.filter(age => age > 46)
.sort((a,b) => a > b ? 1 : -1)
.reduce((total, age) => total+age, 0);
console.log(combined);