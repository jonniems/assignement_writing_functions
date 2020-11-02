let tellFortune = function (children, partnerName, geoLocation, jobTitle) {
    return 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partnerName + ' with ' + children + ' kids.'
}

console.log(tellFortune(0, 'Sara', 'Amsterdam', 'developer'));
console.log(tellFortune(1, 'John', 'New York', 'content manager'));
console.log(tellFortune(2, 'Mary', 'London', 'constructor'));