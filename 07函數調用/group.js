/**
    Here you have 3 arrays of objects, each object represents a bike with the parts installed, 
    and the timestamp when this record was saved in the database..
    the bikeId property is unique to a bike. That means that if two objects have the same bikeId, 
    it is the same bike.
*/
// 1. print an array that contains all latest bike definitions, 
// (no duplicates for bikeId), make sure that the list only includes the latest bike definitions 
// for each bikeId (only include the highest timestamp)
// 2. sort the array by most recent
// 3. make it a function that accepts an undefined number of bikes as parameters

const bikesDefinitions1 = [
    {
        bikeId: 1,
        latestUpdateTimestamp: 1635216996341,
        batteryPartNumber: 1652,
        HMIPartNumber: 1564,
    },
    {
        bikeId: 2,
        latestUpdateTimestamp: 1635216996458,
        batteryPartNumber: 1652,
        HMIPartNumber: 1564,
    },
    {
        bikeId: 3,
        latestUpdateTimestamp: 1635216997458,
        batteryPartNumber: 1652,
        HMIPartNumber: 1564,
    },
]
const bikesDefinitions2 = [
    {
        bikeId: 1,
        latestUpdateTimestamp: 1635216996460,
        batteryPartNumber: 1670,
        HMIPartNumber: 1564,
    },
    {
        bikeId: 3,
        latestUpdateTimestamp: 1635216997320,
        batteryPartNumber: 1200,
        HMIPartNumber: 1385,
    },
    {
        bikeId: 5,
        latestUpdateTimestamp: 1635216996341,
        batteryPartNumber: 1652,
        HMIPartNumber: 1564,
    },
]
const bikesDefinitions3 = [
    {
        bikeId: 2,
        latestUpdateTimestamp: 1635216999999,
        batteryPartNumber: 1956,
        HMIPartNumber: 1564,
    },
    {
        bikeId: 5,
        latestUpdateTimestamp: 1635216996341,
        batteryPartNumber: 1652,
        HMIPartNumber: 1564,
    },
    {
        bikeId: 6,
        latestUpdateTimestamp: 1635216999856,
        batteryPartNumber: 1652,
        HMIPartNumber: 1246,
    },
]

const groupBybikeId = groupBy('bikeId')

const bikeArry = (...bikes) => {
    const result = []
    let box = groupBybikeId(bikes.flat())
    for(k in box) result.push(box[k].sort((a,b) => b.latestUpdateTimestamp - a.latestUpdateTimestamp) [0])
    return result
}

function groupBy(key) {
    return function(array) {
        return array.reduce((result, currentValue) => {
            (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue)
            return result
        }, {})
    }
}

console.log(bikeArry(bikesDefinitions1, bikesDefinitions2, bikesDefinitions3))