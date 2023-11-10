let raceNumber = Math.floor(Math.random() * 1000);

// console.log(raceNumber)

const earlyRegistration = 'False'

const runnerAge = 17;

if (earlyRegistration === 'True' && runnerAge > 18) {raceNumber += 1000};

if (earlyRegistration === 'True' && runnerAge > 18) {console.log(`Your racenumber is ${raceNumber} and you will start at 09:30 am.`);
} else if (earlyRegistration != 'True' && runnerAge > 18) {console.log(`Your racenumber is ${raceNumber} and you will start at 11:00 am`);
} else if (runnerAge < 18) {console.log(`Your racenumber is ${raceNumber} and you will start at 12:30 pm.`)}


