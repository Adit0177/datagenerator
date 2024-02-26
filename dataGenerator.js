// Import Chance.js
const Chance = require('chance');
const fs=require('fs');

// Create a new Chance instance
const chance = new Chance();

// Function to generate random data
function generateRandomData(numObjects, area,filename) {
    const result = [];
    for (let i = 0; i < numObjects; i++) {
        const obj = generateDataForArea(area);
        result.push(obj);
    }
    const jsonData = JSON.stringify(result, null, 2);
    fs.writeFileSync(filename, jsonData);
}

// Function to generate data for a specific area
function generateDataForArea(area) {
    switch (area) {
        case 'weather':
            return generateWeatherData();
        case 'sports':
            return generateSportsData();
        case 'business':
            return generateBusinessData();
        case 'finance':
            return generateFinanceData();
        case 'student':
            return generateStudentData();
        case 'entertainment':
            return generateEntertainmentData();
        case 'health':
            return generateHealthData();
        case 'technology':
            return generateTechnologyData();
        case 'travel':
            return generateTravelData();
        default:
            console.error(`Unknown area of concern: ${area}`);
            return {};
    }
}

// Function to generate random weather data
function generateWeatherData() {
    return {
        temperature: chance.integer({ min: -20, max: 40 }), // Random temperature between -20 and 40
        humidity: chance.integer({ min: 0, max: 100 }), // Random humidity between 0 and 100
        conditions: chance.pickone(['sunny', 'cloudy', 'rainy']) // Random weather condition
    };
}

// Function to generate random sports data
function generateSportsData() {
    return {
        sport: chance.pickone(['football', 'basketball', 'tennis']), // Random sport
        score: chance.integer({ min: 0, max: 100 }), // Random score between 0 and 100
        venue: chance.city() // Random city name
    };
}

// Function to generate random business data
function generateBusinessData() {
    return {
        companyName: chance.company(),
        industry: chance.pickone(['Technology', 'Finance', 'Healthcare', 'Retail', 'Manufacturing']),
        revenue: chance.integer({ min: 10000, max: 1000000 }) // Random revenue between 10000 and 1000000
    };
}

// Function to generate random finance data
function generateFinanceData() {
    return {
        stockPrice: chance.floating({ min: 10, max: 100 }), // Random stock price between 10 and 100
        currency: chance.currency().code // Random currency code
    };
}

// Function to generate random student data
function generateStudentData() {
    return {
        name: chance.name(),
        age: chance.integer({ min: 18, max: 25 }), // Random age between 18 and 25
        major: chance.pickone(['Computer Science', 'Engineering', 'Business', 'Biology', 'Psychology'])
    };
}

// Function to generate random entertainment data
function generateEntertainmentData() {
    return {
        movie: chance.sentence({ words: 3 }), // Random movie title
        genre: chance.pickone(['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'])
    };
}

// Function to generate random health data
function generateHealthData() {
    return {
        bloodPressure: `${chance.integer({ min: 90, max: 140 })}/${chance.integer({ min: 60, max: 90 })}`, // Random blood pressure
        cholesterolLevel: chance.floating({ min: 100, max: 300 }) // Random cholesterol level
    };
}

// Function to generate random technology data
function generateTechnologyData() {
    return {
        product: chance.word(), // Random technology product name
        platform: chance.pickone(['Web', 'Mobile', 'Desktop', 'IoT']),
        version: chance.version() // Random version number
    };
}

// Function to generate random travel data
function generateTravelData() {
    return {
        destination: chance.country({ full: true }), // Random destination country
        duration: chance.integer({ min: 1, max: 14 }), // Random duration of travel
        activities: chance.sentence({ words: 5 }) // Random activities during travel
    };
}

// Export the main function
module.exports = generateRandomData;
