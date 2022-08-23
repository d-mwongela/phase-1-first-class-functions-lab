// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    //const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2)
}
 
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
 
const createFareMultiplier = function (multiplier){
    return function(valueMultiplier){
        return multiplier * valueMultiplier 
    }
}

const fareDoubler = createFareMultiplier(2)
createFareMultiplier()

const fareTripler = createFareMultiplier(3)

const  selectDifferentDrivers = function(drivers, eitherFirstOrLast){
    return eitherFirstOrLast(drivers)
}